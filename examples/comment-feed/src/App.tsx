import { useState, useEffect } from "react";
import { Client, BlockchainMode } from "@srbde/pollen";
import "./App.css";

// Initial nodes
const NODES = ["https://api.hive.blog", "https://api.syncad.com"];

interface HiveComment {
  id: string;
  author: string;
  permlink: string;
  body: string;
  timestamp: string;
}

function App() {
  const [comments, setComments] = useState<HiveComment[]>([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const client = new Client(NODES);
    let isMounted = true;
    let reader: ReadableStreamDefaultReader<any> | undefined;

    const startStreaming = async () => {
      const stream = client.blockchain.getOperationsStream({
        mode: BlockchainMode.Latest,
      });

      reader = stream.getReader();
      setIsConnected(true);

      try {
        while (true) {
          const { value: op, done } = await reader.read();
          if (done || !isMounted) break;

          if (op.op[0] === "comment") {
            const commentData = op.op[1];

            // Filter out edits (they start with @@)
            if (commentData.body.startsWith("@@")) continue;

            const newComment: HiveComment = {
              id: `${op.trx_id}-${op.block_num}`,
              author: commentData.author,
              permlink: commentData.permlink,
              body:
                commentData.body.length > 280
                  ? commentData.body.substring(0, 280) + "..."
                  : commentData.body,
              timestamp: new Date().toLocaleTimeString(),
            };

            setComments((prev) => [newComment, ...prev].slice(0, 50));
          }
        }
      } catch (err) {
        console.error("Stream error:", err);
        if (isMounted) setIsConnected(false);
      }
    };

    startStreaming();

    return () => {
      isMounted = false;
      if (reader) {
        reader.cancel().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>🌸 Pollen Feed</h1>
        <div className="status">
          <div className={`indicator ${isConnected ? "" : "disconnected"}`} />
          {isConnected ? "Live" : "Connecting..."}
        </div>
      </header>

      <main className="feed">
        {comments.length === 0 ? (
          <div className="empty">Waiting for block production...</div>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-card">
              <div className="meta">
                <span className="author">@{comment.author}</span>
                <span className="time">{comment.timestamp}</span>
              </div>
              <div className="body">{comment.body}</div>
            </div>
          ))
        )}
      </main>

      <footer className="footer">
        Powered by Pollen 🌸 | Copyright 2026 Sustainable Resource and Business Development
        Enterprise
      </footer>
    </div>
  );
}

export default App;

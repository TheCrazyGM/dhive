[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / DisqussionQuery

# Interface: DisqussionQuery

Defined in: [src/helpers/database.ts:65](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L65)

## Properties

### filter\_tags?

> `optional` **filter\_tags?**: `string`[]

Defined in: [src/helpers/database.ts:74](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L74)

***

### limit

> **limit**: `number`

Defined in: [src/helpers/database.ts:73](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L73)

Number of results, max 100.

***

### parent\_author?

> `optional` **parent\_author?**: `string`

Defined in: [src/helpers/database.ts:91](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L91)

***

### parent\_permlink?

> `optional` **parent\_permlink?**: `string`

Defined in: [src/helpers/database.ts:92](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L92)

***

### select\_authors?

> `optional` **select\_authors?**: `string`[]

Defined in: [src/helpers/database.ts:75](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L75)

***

### select\_tags?

> `optional` **select\_tags?**: `string`[]

Defined in: [src/helpers/database.ts:76](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L76)

***

### start\_author?

> `optional` **start\_author?**: `string`

Defined in: [src/helpers/database.ts:85](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L85)

Name of author to start from, used for paging.
Should be used in conjunction with `start_permlink`.

***

### start\_permlink?

> `optional` **start\_permlink?**: `string`

Defined in: [src/helpers/database.ts:90](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L90)

Permalink of post to start from, used for paging.
Should be used in conjunction with `start_author`.

***

### tag?

> `optional` **tag?**: `string`

Defined in: [src/helpers/database.ts:69](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L69)

Name of author or tag to fetch.

***

### truncate\_body?

> `optional` **truncate\_body?**: `number`

Defined in: [src/helpers/database.ts:80](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/database.ts#L80)

Number of bytes of post body to fetch, default 0 (all)

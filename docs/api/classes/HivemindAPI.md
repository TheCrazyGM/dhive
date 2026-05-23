[**@srbde/pollen**](../index.md)

***

[@srbde/pollen](../index.md) / HivemindAPI

# Class: HivemindAPI

Defined in: [src/helpers/hivemind.ts:79](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L79)

## Constructors

### Constructor

> **new HivemindAPI**(`client`): `HivemindAPI`

Defined in: [src/helpers/hivemind.ts:80](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L80)

#### Parameters

##### client

[`Client`](Client.md)

#### Returns

`HivemindAPI`

## Properties

### client

> `readonly` **client**: [`Client`](Client.md)

Defined in: [src/helpers/hivemind.ts:80](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L80)

## Methods

### call()

> **call**(`method`, `params?`): `Promise`\<`any`\>

Defined in: [src/helpers/hivemind.ts:87](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L87)

Convenience of calling hivemind api

#### Parameters

##### method

`string`

##### params?

`any`

#### Returns

`Promise`\<`any`\>

***

### getAccountNotifications()

> **getAccountNotifications**(`options?`): `Promise`\<[`Notifications`](../interfaces/Notifications.md)[]\>

Defined in: [src/helpers/hivemind.ts:129](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L129)

Get particular account notifications feed

#### Parameters

##### options?

`AccountNotifsQuery`

#### Returns

`Promise`\<[`Notifications`](../interfaces/Notifications.md)[]\>

***

### getAccountPosts()

> **getAccountPosts**(`options`): `Promise`\<[`Discussion`](../interfaces/Discussion.md)[]\>

Defined in: [src/helpers/hivemind.ts:103](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L103)

Get posts by particular account from Hivemind

#### Parameters

##### options

`AccountPostsQuery`

#### Returns

`Promise`\<[`Discussion`](../interfaces/Discussion.md)[]\>

***

### getCommunity()

> **getCommunity**(`options`): `Promise`\<[`CommunityDetail`](../interfaces/CommunityDetail.md)[]\>

Defined in: [src/helpers/hivemind.ts:112](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L112)

Get community details such as who are the admin,
moderators, how many subscribers, etc..

#### Parameters

##### options

`CommunityQuery`

#### Returns

`Promise`\<[`CommunityDetail`](../interfaces/CommunityDetail.md)[]\>

***

### getRankedPosts()

> **getRankedPosts**(`options`): `Promise`\<[`Discussion`](../interfaces/Discussion.md)[]\>

Defined in: [src/helpers/hivemind.ts:95](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L95)

Get trending, hot, recent community posts from Hivemind

#### Parameters

##### options

`PostsQuery`

#### Returns

`Promise`\<[`Discussion`](../interfaces/Discussion.md)[]\>

***

### listAllSubscriptions()

> **listAllSubscriptions**(`account`): `Promise`\<[`Discussion`](../interfaces/Discussion.md)[]\>

Defined in: [src/helpers/hivemind.ts:121](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L121)

List all subscriptions by particular account

#### Parameters

##### account

`string` \| `object`

the account you want to query

#### Returns

`Promise`\<[`Discussion`](../interfaces/Discussion.md)[]\>

return role, what community the account joined

***

### listCommunities()

> **listCommunities**(`options`): `Promise`\<[`CommunityDetail`](../interfaces/CommunityDetail.md)[]\>

Defined in: [src/helpers/hivemind.ts:137](https://github.com/TheCrazyGM/dhive/blob/b74b0c7f43f7ec8f4907c94415601732f6ab35f2/src/helpers/hivemind.ts#L137)

List all available communities on hivemind

#### Parameters

##### options

`ListCommunitiesQuery`

#### Returns

`Promise`\<[`CommunityDetail`](../interfaces/CommunityDetail.md)[]\>

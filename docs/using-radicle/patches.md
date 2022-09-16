---
id: patches
title: Collaborate on and merge patches
---

With patches, Radicle's equivalent to pull requests, you can collaborate with contributors on changes to your shared
project in a way that's more intuitive than Git's CLI tools.

We'll cover the entire collaboration process using patches, from both the contributor and maintainer's perspectives.


The Radicle [web app](https://app.radicle.xyz) will support reviewing and approving patches in the future, but for now,
they work only on the CLI.

:::caution

This document details an experimental feature that's still undergoing active development. There will likely be bugs and
breaking changes.

:::

## Contributor: Create a patch

If you haven't already, [clone](using-radicle/clone.md) the project you want to collaborate on. Make a change and commit
it:

```bash
git add <filename>
git commit -m "<your commit message>"
```

Next, push your changes to your remote with `rad push`.

Create your patch and verify the commits you'd like to add to your patch:

```
rad patch --sync
```

Verify the commits you'd like to add to your patch by hitting `Y`. `rad` opens a text file for you to edit the title and
description of your patch. The title of your patch goes on the first line, and your description starts on the third
line, with one blank line between them. For example:

```
Tweak the README

This patch makes a small edit to the README as an example of how patches work in Radicle.

<!--
Please enter a patch message for your changes. An empty
message aborts the patch proposal.

The first line is the patch title. The patch description
follows, and must be separated with a blank line, just
like a commit message. Markdown is supported in the title
and description.
-->
```

`rad` asks you to verify the patch and hit `Y` again if you like what you see. It then syncs your local project state
with your remote, allowing others to track and review the work you've done.

## Maintainer: Track, review and merge the patch

To review and merge any code, you first need to find any patches to your project that have been published to the Radicle network.

### Track your peer

Run `rad track` to return a list of remotes on your project.

```bash
radicle-example rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy (local)
│
├── hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy docs-tester
│   └── main bcb1e5cda1aba650e986ede87f9496bab457720a 
│
└── hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk joelhans  delegate   you 
    └── main e2cc2f98df61de3503edfcf6904993add918cda6
```

In the example above, you can see the canonical main branch, managed by the project's single delegate, in addition to
two additional source trees from collaborators.

Let's say you want to track the patch from the `docs-tester` user.

Use `rad track <peer-id>` to track the remote peer from your local working copy.

```
TK
```

### Review the patch

Next, list the patches.

```
rad patch --list

TK
TK
```

Review the patch with `rad review`.

```
rad review --accept PATCH --message "LGTM."
```

> **Does `rad review` let you view a diff?**

### Merge and push to the canonical branch

```
rad merge <patch>
```

```
rad push
```

## Contributor: Pull the changes

As a contributor, you can now see the fruits of your labor by pulling the changed codebase back into your local copy.
And with the state of both remotes at the same `HEAD` you can continue collaborating with additional patches.

Check out the maintainer's branch.

```
git checkout peers/<maintainer>/<master/main>
```

> **Why not `rad checkout`?**

Pull the changes from their branch to your local working copy.

```
rad pull
```

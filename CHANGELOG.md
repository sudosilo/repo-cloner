2026-11-17, v2026.11.17d. Added the Scans tab, which reads scan files from the scans folder, combines every scan, ranks games by Claude grade and can hide risky ones. Added the first scan, run by hand by a Claude session. The license scanner now flags games built on famous game names or characters, art the README says was taken from another game, and share alike art.

2026-11-17, v2026.11.17c. Locked Repo Cloner behind the Mohave Tech sign in on the shared Supabase hub. Each person saves their own Claude API key and GitHub token to their account, and the Claude button bills their own key straight from their browser. Removed the shared server route so the tool never spends the owner's key.

2026-11-17, v2026.11.17b. Added an Open on GitHub button to the detail sheet.

2026-11-17, v2026.11.17. Created Repo Cloner. Hunts GitHub for open source games with sellable licenses, deep checks asset licenses and the file tree, grades each repo as a reskin base, asks Claude through the shared server, and saves picks for Repo Find.

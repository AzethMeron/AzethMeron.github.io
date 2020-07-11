<b>WoG 3.59 ERM Help (for Alpha 8.1+)</b>

<b>Skipped entries</b> <br>
For whatever reason i've decide to skip those, should be incorporated one day.<br>
[] IF:M-1 doesn't exist anymore<br>
[+-] MR:N didn't work when a copy of monster was passed to !?MR. Now it returns -1 in this case and BM-1 changes current (from !?MR or currently active) monseter's properties.<br>
[+] !?BA54 - called on both sides(?) after showing battlefield (after showing tactics dialog in case tactics is enabled).

<b>To-do</b>
- CD:B simply doesn't work at all
- Check !?BA trigger after flee
- DL template layout doesn't work (on linux). Incorporate ERA-style.

<b>New entries:</b>
- BA:B$/1 - new syntax, for Lua support
- New Lua trigger syntax: .pre, .post

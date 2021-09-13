// let appData = [{ "id": 0, "header": "Nwp-Home", "info": "Datenbanken und Archive", "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-02.png", "name": "Start", "path": "/", "icon": "start", "links": [] }, { "id": 1, "header": "Nwp-Hsp", "info": "Hoerspiele und Audiobooks", "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-03.png", "backBtn": true, "mainP": true, "name": "HspDb", "path": "/hsp", "icon": "hsp", "links": [] }, { "id": 2, "header": "Nwp-Archiv", "info": "Adult Movie Collection", "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-04.png", "backBtn": true, "mainP": true, "name": "Archiv", "path": "/archiv/", "icon": "archive", "links": [] }, { "id": 3, "header": "Nwp-Studio", "info": "Blackburn Projekt Archiv", "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-05.png", "backBtn": true, "mainP": true, "name": "Studio", "path": "/studio/", "icon": "studio", "links": [] }, { "id": 4, "header": "Nwp-Settings", "info": "Settings and Options", "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-07.png", "backBtn": true, "mainP": false, "name": "Settings", "path": "/settings/", "icon": "settings", "links": [] }, { "id": 5, "header": "Nwp-Auth", "info": "User Admin Panel", "file": "https://nwp-cgn.de/img/toon/vio1/NWP-EE-08.png", "op2": true, "name": "Admin", "path": "/admin", "icon": "user", "avatar": "https://nwp-cgn.de/img/poser/internet-explorer-128.png", "links": [] }];

import Archiv from './routes/archiv.svelte';
 import Start from './routes/start.svelte';
 import NotFound from './routes/static/not-found.svelte';
 import Studio from './routes/studio.svelte';
 import StudioDetails from './routes/studio-details.svelte';
 import User from './routes/user.svelte';

import { supabase } from './routes/user/supabase';
const user = () => supabase.auth.user()

const routes = {
    '/': Start,
    '/archiv': {
        component: Archiv,
        guard: () => user(),
    },
    '/studio': {
        component: Studio,
        guard: () => user(),
    },
    '/studio/:id': {
        component: StudioDetails,
        guard: () => user(),
    },
    '/user': User,
    '*': NotFound
}

export default routes;



// @index(['./routes/*.svelte', './routes/user/*.svelte', './routes/static/*.svelte'], (f, _, e) => `${e.isFirst ? '/* const nav = [ \n' : ''} ["${_.pascalCase(f.name)}", "/${f.name}", "${f.name}"]${e.isLast ? '\n] */;' : ','}`)
// @endindex
// @index(['./routes/*.svelte', './routes/static/*.svelte', './routes/article/*.svelte', './routes/article/*.md'], (f, _, e) => `import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
// @endindex
// @index(['./routes/*.svelte', './routes/static/*.svelte'], (f, _, e) => `${e.isFirst ? '/* const routes = { \n' : ''}'/${f.name}': ${_.pascalCase(f.name)}${e.isLast ? '\n} */;' : ','}`)
// @endindex
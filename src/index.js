/* eslint-disable */


// @index(['./ff/*.svelte'], (f, _, e) => `${e.isFirst ? 'const nav = [ \n' : ''} ["${_.pascalCase(f.name)}", "/${f.name}", "${f.name}"]${e.isLast ? '\n];' : ','}`)

// @endindex
// @index(['./routes/*.svelte', './routes/user/*.svelte', './routes/static/*.svelte'], (f, _, e) => ` import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
 import Archiv from './routes/archiv.svelte';
 import Start from './routes/start.svelte';
 import NotFound from './routes/static/not-found.svelte';
 import Studio from './routes/studio.svelte';
 import User from './routes/user.svelte';
 import Details from './routes/user/details.svelte';
 import Login from './routes/user/login.svelte';
 import Profil from './routes/user/profil.svelte';
// @endindex
// @index(['./dd/*.svelte'], (f, _, e) => `${e.isFirst ? 'const routes = { \n' : ''}'/${f.name}': ${_.pascalCase(f.name)}${e.isLast ? '\n};' : ','}`)

// @endindex

// @index(['./store/*.js'], (f, _, e) => `${e.isFirst ? 'import { \n' : ''}${f.name} ${e.isLast ? '} from \'./supabase\';' : ','}`)

// @endindex


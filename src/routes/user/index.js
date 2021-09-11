/* eslint-disable */


// @index(['./ff/*.svelte'], (f, _, e) => `${e.isFirst ? 'const nav = [ \n' : ''} ["${_.pascalCase(f.name)}", "/${f.name}", "${f.name}"]${e.isLast ? '\n];' : ','}`)

// @endindex
// @index(['./*.svelte', './routes/static/*.svelte'], (f, _, e) => `// import ${_.pascalCase(f.name)} from '${f.path}${f.ext}';`)
// import Login from './login.svelte';
// import Profil from './profil.svelte';
// import Settings from './settings.svelte';
// import UserLogout from './user-logout.svelte';
// import UserSite from './user-site.svelte';
// @endindex
// @index(['./dd/*.svelte'], (f, _, e) => `${e.isFirst ? 'const routes = { \n' : ''}'/${f.name}': ${_.pascalCase(f.name)}${e.isLast ? '\n};' : ','}`)

// @endindex

// @index(['./store/*.js'], (f, _, e) => `${e.isFirst ? 'import { \n' : ''}${f.name} ${e.isLast ? '} from \'./supabase\';' : ','}`)
import { 
supabase ,
userData ,
userObj } from './supabase';
// @endindex


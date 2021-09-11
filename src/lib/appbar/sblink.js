export function sbLinkClick(node) {


   function clickHandle(event) {
      node.dispatchEvent(new CustomEvent('sbClick', {
         detail: {
            node
         }
      }));
   }


   node.addEventListener('click', clickHandle);

   return {
      destroy() {
         node.removeEventListener('click', clickHandle);
      }
   };
}
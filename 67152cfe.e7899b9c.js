(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{191:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(1),i=n(9),l=(n(0),n(307)),p={id:"ecosystem-alpinejs",title:"single-spa-alpinejs",sidebar_label:"AlpineJS"},o=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[{value:"<em>1 - Template Only</em>",id:"1---template-only",children:[]},{value:"<em>2 - Template with externally defined <code>x-data</code></em>",id:"2---template-with-externally-defined-x-data",children:[]},{value:"<em>3 - Template with externally defined <code>x-data</code> with <code>x-init</code></em>",id:"3---template-with-externally-defined-x-data-with-x-init",children:[]},{value:"Usage Examples",id:"usage-examples",children:[]}]},{value:"API / Options",id:"api--options",children:[{value:"xData and xInit Handling",id:"xdata-and-xinit-handling",children:[]}]}],r={rightToc:o},s="wrapper";function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)(s,Object(a.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/single-spa/single-spa-alpinejs"}),"single-spa-alpinejs")," is a helper library for mounting ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/alpinejs/alpine/"}),"alpinejs")," components as\nsingle-spa applications or parcels."),Object(l.b)("h2",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"npm install --save single-spa-alpinejs\n\n# or\nyarn add single-spa-alpinejs\n")),Object(l.b)("p",null,"Alternatively, you can use single-spa-alpinejs from a CDN as a global variable:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://cdn.jsdelivr.net/npm/single-spa-alpinejs"><\/script>\n')),Object(l.b)("p",null,"Note that you might want to lock down the package to a specific version. See ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://cdn.jsdelivr.net/npm/single-spa-alpinejs"}),"here")," for\nhow to do that."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"There are three ways the you can define AlpineJS components as single-spa applications or parcels.")),Object(l.b)("h3",{id:"1---template-only"},Object(l.b)("em",{parentName:"h3"},"1 - Template Only")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The simplest way where the template contains all the required data and initialization logic (including ",Object(l.b)("inlineCode",{parentName:"li"},"x-data")," and ",Object(l.b)("inlineCode",{parentName:"li"},"x-init"),") as part of the dom. The template is provided via the options attribute ",Object(l.b)("inlineCode",{parentName:"li"},"template"))),Object(l.b)("h3",{id:"2---template-with-externally-defined-x-data"},Object(l.b)("em",{parentName:"h3"},"2 - Template with externally defined ",Object(l.b)("inlineCode",{parentName:"em"},"x-data"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"You could also provide ",Object(l.b)("inlineCode",{parentName:"li"},"x-data")," externally and the helper will add it to the component.",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"x-data")," can be provided in the following forms (via the options attribute ",Object(l.b)("inlineCode",{parentName:"li"},"xData"),")",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"an object"),Object(l.b)("li",{parentName:"ul"},"a function that returns an object"),Object(l.b)("li",{parentName:"ul"},"a function that returns a promise which resolves with an object.")))))),Object(l.b)("h3",{id:"3---template-with-externally-defined-x-data-with-x-init"},Object(l.b)("em",{parentName:"h3"},"3 - Template with externally defined ",Object(l.b)("inlineCode",{parentName:"em"},"x-data")," with ",Object(l.b)("inlineCode",{parentName:"em"},"x-init"))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"You can also provide ",Object(l.b)("inlineCode",{parentName:"p"},"x-init")," externally along with the ",Object(l.b)("inlineCode",{parentName:"p"},"x-data")," and the helper will add it to the component.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The ",Object(l.b)("inlineCode",{parentName:"p"},"x-init")," can be provided in the following forms (via the options attribute ",Object(l.b)("inlineCode",{parentName:"p"},"xInit"),") and needs to be a function.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Please note the ",Object(l.b)("inlineCode",{parentName:"p"},"xData")," attribute ",Object(l.b)("em",{parentName:"p"},"must")," be provided otherwise the ",Object(l.b)("inlineCode",{parentName:"p"},"xInit")," attribute will be ignored.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The sample below references the example from the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.alpinetoolbox.com/examples/"}),"Alpine Toolbox - Alpine JS and fetch()")," and demonstrates how you can use the ",Object(l.b)("inlineCode",{parentName:"p"},"xInit")," and ",Object(l.b)("inlineCode",{parentName:"p"},"xData")," attributes to create an AlpineJS application ."))),Object(l.b)("h3",{id:"usage-examples"},"Usage Examples"),Object(l.b)("h4",{id:"1---template-only-1"},Object(l.b)("em",{parentName:"h4"},"1 - Template Only")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import singleSpaAlpinejs from \'single-spa-alpinejs\';\n\nconst alpinejslifecycles = singleSpaAlpinejs({\n  template: `\n    <div class="rounded overflow-hidden shadow-lg font-sans p-1 m-1" \n         x-data="{ open: false }">\n      <div class="font-bold p-1">Example for x-show attribute</div>\n      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold \n              hover:text-white py-2 px-4 border border-blue-500 \n              hover:border-transparent rounded" \n              @click="open = !open">Open/Close</button>\n      <div x-show="open" class="text-4xl">\n          Hey, I\'m open\n      </div>\n    </div>`,\n});\n\nexport const bootstrap = alpinejslifecycles.bootstrap;\nexport const mount = alpinejslifecycles.mount;\nexport const unmount = alpinejslifecycles.unmount;\n')),Object(l.b)("h4",{id:"via-cdn"},"Via cdn"),Object(l.b)("p",null,"Example usage when installed via CDN:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The usage is similar and once the library is loaded it will be available globally and accessed via the ",Object(l.b)("inlineCode",{parentName:"li"},"window")," object.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const alpinejsApp = window.singleSpaAlpinejs({\n  template: `\n    <div class="rounded overflow-hidden shadow-lg font-sans p-1 m-1" \n         x-data="{ open: false }">\n      <div class="font-bold p-1">Example for x-show attribute</div>\n      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold \n      hover:text-white py-2 px-4 border border-blue-500 \n      hover:border-transparent rounded" @click="open = !open">Open/Close</button>\n      <div x-show="open" class="text-4xl">\n          Hey, I\'m open\n      </div>\n    </div>`,\n});\n\nsingleSpa.registerApplication({\n  name: \'name\',\n  app: alpinejsApp,\n  activeWhen: () => true,\n});\n')),Object(l.b)("h4",{id:"2---template-with-externally-defined-x-data-1"},Object(l.b)("em",{parentName:"h4"},"2 - Template with externally defined ",Object(l.b)("inlineCode",{parentName:"em"},"x-data"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import singleSpaAlpinejs from \'single-spa-alpinejs\';\n\nconst alpinejslifecycles = singleSpaAlpinejs({\n  template: `\n    <div class="rounded overflow-hidden shadow-lg font-sans p-1 m-1">\n      <div class="font-bold p-1">Example for x-show attribute</div>\n      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold \n      hover:text-white py-2 px-4 border border-blue-500 \n      hover:border-transparent rounded" @click="open = !open">Open/Close</button>\n      <div x-show="open" class="text-4xl">\n          Hey, I\'m open\n      </div>\n    </div>`,\n  xData: { open: false },\n});\n\nexport const bootstrap = alpinejslifecycles.bootstrap;\nexport const mount = alpinejslifecycles.mount;\nexport const unmount = alpinejslifecycles.unmount;\n')),Object(l.b)("h4",{id:"3---template-with-externally-defined-x-data-with-x-init-1"},Object(l.b)("em",{parentName:"h4"},"3 - Template with externally defined ",Object(l.b)("inlineCode",{parentName:"em"},"x-data")," with ",Object(l.b)("inlineCode",{parentName:"em"},"x-init"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import singleSpaAlpinejs from \'single-spa-alpinejs\';\n\nconst appTemplate = `\n    <div class="w-full h-full text-gray-800">\n        <h1 class="mt-0 mb-3 font-light text-3xl" x-text="title">\x3c!-- title text --\x3e</h1>\n        <p class="text-xl text-gray-600 font-light mb-4" x-html="intro">\x3c!-- intro text --\x3e</p>\n        <div class="flex flex-wrap -mx-2 pb-8">\n        \x3c!-- begin: user card --\x3e\n        <template x-for="user in users" :key="user.id">\n            <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-auto font-light">\n            <div class="flex bg-white rounded-lg shadow-md m-2 border-l-4 \n                        border-white hover:shadow-2xl hover:border-pink-500 \n                        cursor-pointer relative">\n                <div class="p-4 pr-6 leading-normal">\n                <div class="font-medium text-xl truncate" x-text="user.name"></div>\n                <div class="truncate uppercase text-xs text-gray-500 font-semibold \n                pb-2 tracking-widest" x-text="user.company.name"></div>\n                <div class="" x-text="user.phone"></div>\n                <a class="text-blue-600 hover:text-blue-700 mr-4 block"     \n                    x-bind:href="\'mailto:\' + user.email" x-text="user.email"></a>     \n                <a class="text-blue-600 hover:text-blue-700 block" \n                x-bind:href="\'https://\' + user.website" x-text="user.website"></a>\n                </div>\n            </div>\n            </div>\n        </template>\n        \x3c!-- end: user card --\x3e\n        </div>\n    </div>\n  `;\n\nconst appDataFn = ({ title, name }) => ({\n  title,\n  intro:\n    \'Implement a simple <code class="text-md text-pink-600">fetch()</code> request to render a list of items using Alpine.js :)\',\n  users: [],\n  open: false,\n  name,\n});\n\nconst appXInitFn = (id) => {\n  return fetch(\'https://jsonplaceholder.typicode.com/users\')\n    .then((response) => response.json())\n    .then((data) => (document.querySelector(`#${id}`).__x.$data.users = data));\n};\n\nconst opts = {\n  template: appTemplate,\n  xData: (data) => appDataFn(data), // pass props to x-data\n  xInit: appXInitFn,\n};\n\nconst alpinejslifecycles = singleSpaAlpinejs(opts);\n\nexport const bootstrap = alpinejslifecycles.bootstrap;\nexport const mount = alpinejslifecycles.mount;\nexport const unmount = alpinejslifecycles.unmount;\n')),Object(l.b)("h2",{id:"api--options"},"API / Options"),Object(l.b)("p",null,"single-spa-html is called with an object that has the following properties:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"template")," (required): An HTML string or a function that returns a string. The function will be called with the single-spa custom props. The returned string is injected into the DOM during the single-spa mount lifecycle."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"domElementGetter")," (optional): A function that returns the dom element container into which the HTML will be injected. If omitted,\na default implementation is provided that wraps the template in a ",Object(l.b)("inlineCode",{parentName:"li"},"<div>")," that is appended to ",Object(l.b)("inlineCode",{parentName:"li"},"document.body"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"xData")," (optional): An object or a function or a function that returns a promise.The returned string is injected into the DOM as the ",Object(l.b)("inlineCode",{parentName:"li"},"x-data")," attribute during the single-spa mount lifecycle."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"xInit")," (optional): A function or a function that returns a promise. The function provided is added to the global scope and the function initiation along with the root dom element id as a parameter is injected into the DOM as the ",Object(l.b)("inlineCode",{parentName:"li"},"x-init")," attribute during the single-spa mount lifecycle. Please note the ",Object(l.b)("inlineCode",{parentName:"li"},"xData")," attribute ",Object(l.b)("em",{parentName:"li"},"must")," be provided otherwise the ",Object(l.b)("inlineCode",{parentName:"li"},"xInit")," attribute will be ignored. The function you provide ",Object(l.b)("inlineCode",{parentName:"li"},"xInit"))),Object(l.b)("h3",{id:"xdata-and-xinit-handling"},"xData and xInit Handling"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This section covers the details of how ",Object(l.b)("inlineCode",{parentName:"p"},"xData")," and ",Object(l.b)("inlineCode",{parentName:"p"},"xInit")," option attributes are processed by the single spa helper.")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Consider the example below"))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const appDataFn = () => { open: false, loading: true }\nconst appXInitFn = (domId) => {\n    console.log('Hello from appXInitFn');\n  // domId provides access to the parent dom element where x-data and x-init are defined\n    document.querySelector(`#${domId}`).__x.$data.loading = false\n}\n\nconst opts = {\n  template: appTemplate,              // base template\n  xData: (data) => appDataFn(data), // pass props to x-data\n  xInit: appXInitFn,                    // x-Init function\n};\n\nconst alpinejsApp = singleSpaAlpinejs(opts);\n\nsingleSpa.registerApplication({\n  name: 'myapp',\n  app: alpinejsApp,\n  activeWhen: () => true,\n});\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The helper does the following "),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Adds the template to the dom wrapped in ",Object(l.b)("inlineCode",{parentName:"li"},"parent dom element")," with and id that has a prefix of ",Object(l.b)("inlineCode",{parentName:"li"},"alpine"),". In this case it will be ",Object(l.b)("inlineCode",{parentName:"li"},"id='alpine-myapp'")," "),Object(l.b)("li",{parentName:"ul"},"Attaches a resolved ",Object(l.b)("inlineCode",{parentName:"li"},"xData")," as a string ",Object(l.b)("inlineCode",{parentName:"li"},'x-data="{ "name": "myapp" ,"open": false }"')," to the ",Object(l.b)("inlineCode",{parentName:"li"},"parent dom element"),". "),Object(l.b)("li",{parentName:"ul"},"It will make the user defined ",Object(l.b)("inlineCode",{parentName:"li"},"appXInitFn")," available globally as an attribute of ",Object(l.b)("inlineCode",{parentName:"li"},"window.singleSpaAlpineXInit")," and will be accessible via variable ",Object(l.b)("inlineCode",{parentName:"li"},"window.singleSpaAlpineXInit.myapp")," "),Object(l.b)("li",{parentName:"ul"},"Attaches a resolved ",Object(l.b)("inlineCode",{parentName:"li"},"xInit")," as a string that calls the globally defined variable ",Object(l.b)("inlineCode",{parentName:"li"},"x-init=\"singleSpaAlpineXInit.myapp('alpine-myapp')\"")," to the ",Object(l.b)("inlineCode",{parentName:"li"},"parent dom element"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Note")," that this also passes ",Object(l.b)("inlineCode",{parentName:"li"},"id")," of the ",Object(l.b)("inlineCode",{parentName:"li"},"parent dom element")," which can then be used to access the alpine data elements to update the state as required.")),Object(l.b)("h4",Object(a.a)({parentName:"li"},{id:"special-characters-in-the-application-names"}),"Special characters in the application names"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"You may have special characters in the application name for example ",Object(l.b)("inlineCode",{parentName:"li"},"@my/app"),". See the example below")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"    singleSpa.registerApplication({\n    name: '@my/app',\n    app: alpinejsApp,\n    activeWhen: () => true,\n        });\n")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"The single spa helper converts these to valid ",Object(l.b)("inlineCode",{parentName:"p"},"global")," function names by ",Object(l.b)("inlineCode",{parentName:"p"},"replacing")," ",Object(l.b)("inlineCode",{parentName:"p"},"all the special characters")," with underscores (",Object(l.b)("inlineCode",{parentName:"p"},"_"),"). This does not require any special handling from the user as the helper takes care of this internally")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"In the above case the ",Object(l.b)("inlineCode",{parentName:"p"},"xInit")," dom element would look like the following ",Object(l.b)("inlineCode",{parentName:"p"},"x-init=\"singleSpaAlpineXInit._my_app('alpine-@my/app')\"")," where the ",Object(l.b)("inlineCode",{parentName:"p"},"xInit")," function is available as a ",Object(l.b)("inlineCode",{parentName:"p"},"global")," variable ",Object(l.b)("inlineCode",{parentName:"p"},"_my_app"),"."))))))}c.isMDXComponent=!0},307:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return b}));var a=n(0),i=n.n(a),l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},o=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)};var r="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},c=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,r=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),c=p(n),b=a,d=c[o+"."+b]||c[b]||s[b]||l;return n?i.a.createElement(d,Object.assign({},{ref:t},r,{components:n})):i.a.createElement(d,Object.assign({},{ref:t},r))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[r]="string"==typeof e?e:a,p[1]=o;for(var b=2;b<l;b++)p[b]=n[b];return i.a.createElement.apply(null,p)}return i.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);
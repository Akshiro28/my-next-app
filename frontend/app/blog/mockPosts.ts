export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  content: string;
  author: string;
  date: string;
};

export const mockPosts: BlogPost[] = [
  {
    slug: 'first-post',
    title: 'My First Blog Post',
    excerpt: 'This is a short summary of my first blog post.',
    image: '/images/blog/my-first-blog-post.jpg',
    content: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi in dolor luctus, vel fringilla massa porttitor. In efficitur justo nec dolor scelerisque, at fermentum nulla lobortis.</p>

      <h2>Introduction to the Topic</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec ultricies est. Nullam feugiat, ligula vel efficitur finibus, lacus erat eleifend nulla, nec luctus nisi est a libero. Praesent finibus libero ac elit facilisis, sed porta augue vulputate.
      </p>
      <p>
        Vivamus eget sapien vitae elit convallis fermentum non sit amet diam. Aliquam at nibh ac augue gravida consequat. Curabitur convallis sem nec urna cursus viverra.
      </p>

      <h2>Why This Matters</h2>
      <p>
        Proin vehicula purus eu justo lobortis, a tristique magna dapibus. Donec vestibulum sapien sed elit hendrerit, at eleifend magna scelerisque. Aenean dapibus libero sed odio dapibus, vel finibus nulla elementum.
      </p>

      <h2>Practical Examples</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet, ipsum non commodo rhoncus, erat ligula tristique mauris, ac vehicula ligula eros sed justo. Suspendisse potenti. Sed tincidunt euismod convallis.
      </p>
      <p>
        In at dolor ut risus mattis pulvinar. Integer sagittis felis id eros varius accumsan. In porttitor orci nec lorem mattis, nec faucibus magna malesuada. Mauris sit amet sapien eget diam malesuada iaculis.
      </p>

      <h2>Conclusion</h2>
      <p>
        Suspendisse id dolor et arcu lacinia imperdiet. Maecenas dignissim nec metus non commodo. Quisque eget sapien a nisl laoreet pharetra. Nam sed diam eros. Nullam venenatis, sem in porta ullamcorper, velit justo volutpat odio, in laoreet ligula nunc nec elit.
      </p>
      <p>
        Integer feugiat, purus at placerat blandit, tellus elit lacinia quam, sit amet efficitur turpis mi in risus. Donec in lorem mauris. Fusce bibendum mauris id turpis pharetra cursus.
      </p>
    `,
    author: 'John Doe',
    date: '2025-07-17',
  },
  {
    slug: 'learning-nextjs',
    title: 'Learning Next.js Step by Step',
    excerpt: 'Follow along as I learn how to build a blog using Next.js.',
    image: '/images/blog/learning-nextjs-step-by-step.webp',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at purus nec sem efficitur feugiat. Cras fermentum turpis non lacus scelerisque facilisis. Integer non eros in lacus mattis tincidunt at a turpis.
      </p>

      <h2>Getting Started</h2>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec fermentum quam ac nunc dignissim, sed malesuada magna pretium. Curabitur nec finibus diam. Sed nec justo non ipsum egestas sollicitudin.
      </p>

      <h2>Core Concepts Explained</h2>
      <p>
        Mauris in lorem sem. Nulla a magna porta, cursus magna ut, blandit metus. Vivamus varius sem non metus dapibus, sit amet sollicitudin justo porta. Integer luctus lacus sit amet metus vestibulum, et ullamcorper risus tristique.
      </p>
      <p>
        Pellentesque tristique, leo in faucibus mattis, purus lorem facilisis neque, nec congue ante justo et ligula. Duis viverra diam nec ligula pulvinar, eget sagittis nulla congue.
      </p>

      <h2>Common Pitfalls</h2>
      <p>
        Sed vel turpis rhoncus, tristique nulla at, pretium ligula. Aenean vitae sodales arcu. In sit amet sem nec ligula fermentum convallis. Ut a sem in metus tincidunt volutpat.
      </p>

      <h2>Advanced Techniques</h2>
      <p>
        Phasellus tristique mauris id fermentum feugiat. Aenean ut diam sit amet lorem congue pretium. Sed suscipit ex nec sapien congue, in volutpat eros vulputate.
      </p>
      <p>
        Nulla at turpis vitae justo lobortis tincidunt. Curabitur nec tempor elit, nec porttitor velit. Nunc vel rutrum purus. Aliquam erat volutpat.
      </p>
      <p>
        Duis nec justo sed ante tincidunt finibus. Integer a ligula vel libero blandit ultrices at nec magna. In rhoncus nunc at eros tincidunt, nec lobortis justo fermentum.
      </p>

      <h2>Summary</h2>
      <p>
        Morbi non porttitor justo. Suspendisse fermentum, nisi ut pretium blandit, turpis sapien convallis ante, id finibus erat orci in leo. Etiam a justo at sapien congue tincidunt.
      </p>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur malesuada turpis ac lorem accumsan, at interdum sapien sollicitudin.
      </p>
    `,
    author: 'Lacy Cobb',
    date: '2025-07-16',
  },
  {
    slug: 'nextjs-is-awesome',
    title: 'Next.js is awesome!',
    excerpt: 'Fullstack capabilities in a React framework.',
    image: '/images/blog/nextjs.png',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac vulputate lorem. Suspendisse potenti. Nunc et orci vitae lorem faucibus pretium at nec quam.
      </p>

      <h2>Understanding the Basics</h2>
      <p>
        Nam sit amet diam a ligula gravida congue. Sed scelerisque, turpis in tincidunt facilisis, nibh elit hendrerit enim, et tincidunt nunc neque in dolor. Fusce rhoncus neque at nunc dignissim, nec hendrerit libero sagittis.
      </p>
      <p>
        Pellentesque blandit quam at augue facilisis, sed placerat justo malesuada. Integer mollis eros sed nisi laoreet, in commodo nisi scelerisque.
      </p>

      <h2>Real-World Scenarios</h2>
      <p>
        Donec vitae odio fringilla, lobortis lorem at, bibendum sapien. Aenean iaculis nunc et tellus laoreet, at convallis metus rutrum. Etiam sit amet ex sem. Nulla facilisi.
      </p>

      <h2>Implementation Tips</h2>
      <p>
        Ut sed tellus nec sapien porttitor laoreet. Duis nec ante ac elit accumsan fermentum. Sed vel tincidunt sem, nec feugiat augue. Integer sed efficitur orci, sed convallis elit.
      </p>
      <p>
        Cras sodales, mauris sed tincidunt hendrerit, velit sem gravida metus, at sollicitudin ipsum erat ac leo. Phasellus in gravida arcu, in cursus sapien.
      </p>
      <p>
        Aliquam erat volutpat. In vitae velit erat. Duis non magna eget erat vehicula lobortis.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Vivamus at augue in felis dapibus bibendum. Integer tincidunt sapien in neque commodo scelerisque. Proin efficitur vel justo id sodales.
      </p>
      <p>
        Morbi fringilla, massa nec luctus porta, libero ligula sagittis diam, nec condimentum lorem nunc vitae augue. Sed dignissim sapien nec orci egestas, vel sodales lorem convallis.
      </p>
      <p>
        Fusce fermentum arcu at nibh dignissim, nec eleifend odio viverra. Suspendisse tempor arcu in bibendum vulputate.
      </p>
    `,
    author: 'Vince Boyer',
    date: '2025-07-16',
  },
  {
    slug: 'react-ui-made-modular',
    title: 'React: UI made modular',
    excerpt: 'A component-based architecture that makes your UI modular, reusable, and easier to manage.',
    image: '/images/blog/react.png',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut ligula quis magna feugiat tincidunt. Sed eget fermentum lacus. In cursus leo vel nisl placerat volutpat.
      </p>

      <h2>Introduction to the Topic</h2>
      <p>
        Suspendisse nec arcu et lorem posuere feugiat. Donec vitae sapien a sem accumsan congue. Vivamus accumsan tellus in blandit rhoncus. Aliquam erat volutpat.
      </p>

      <h2>Key Concepts</h2>
      <p>
        Aenean congue lacus vitae tincidunt accumsan. Nullam finibus ex ac odio vehicula feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <p>
        Curabitur laoreet dapibus lorem, vitae dignissim justo ultrices sed. Mauris malesuada ipsum in sem pulvinar, vel sollicitudin tellus volutpat.
      </p>

      <h2>Workflow Breakdown</h2>
      <p>
        Integer eu mi convallis, posuere risus sed, pulvinar ex. Donec scelerisque viverra nulla, nec porta magna porttitor ut. In id purus in diam porta pretium.
      </p>

      <h2>Deep Dive: Inner Mechanics</h2>
      <p>
        Donec at lectus in velit dignissim fermentum. Sed convallis risus ut arcu lacinia, nec pulvinar metus gravida. Vestibulum pretium augue nec luctus elementum.
      </p>
      <p>
        Nunc fermentum justo eget nisl sollicitudin, ac efficitur nulla mattis. Fusce ultricies dui in felis hendrerit, at placerat erat fermentum.
      </p>

      <h2>Debugging and Troubleshooting</h2>
      <p>
        Quisque consequat lorem sed nisi facilisis, vel laoreet est luctus. Integer accumsan odio et sapien dapibus porttitor. Aenean iaculis finibus lectus, nec hendrerit sem volutpat id.
      </p>
      <p>
        Cras dignissim sapien nec est fermentum, in sodales ex porta. Curabitur nec rhoncus odio.
      </p>

      <h2>Wrapping Up</h2>
      <p>
        Sed tristique lectus non enim sodales, in tincidunt tortor congue. Donec congue tellus eget nisi gravida, eget sodales nulla facilisis.
      </p>
      <p>
        Phasellus ullamcorper lorem vel arcu pretium, ut tincidunt nisi pulvinar. Duis in nulla eget leo mattis viverra non in velit.
      </p>
    `,
    author: 'Shirley Kane',
    date: '2025-07-15',
  },
  {
    slug: 'tailwind-rapid-ui-development',
    title: 'Tailwind: Rapid UI development with utility-first precision',
    excerpt: 'Utility-first styling that lets you build custom, responsive designs fast.',
    image: '/images/blog/tailwind.webp',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non magna ac justo facilisis pulvinar. Vivamus luctus purus sed sapien hendrerit, non luctus massa facilisis.
      </p>

      <h2>Getting Started</h2>
      <p>
        Praesent bibendum enim sit amet mi faucibus, in blandit metus tristique. Donec malesuada placerat tortor, at iaculis nunc fermentum et. In vel ligula in sapien convallis blandit.
      </p>

      <h2>Core Principles</h2>
      <p>
        Duis id nibh nec odio rutrum fermentum. Aenean nec sem sed justo pharetra dapibus. Fusce tincidunt risus nec pulvinar pulvinar.
      </p>
      <p>
        Etiam ut erat at elit mollis viverra. Pellentesque nec lorem at orci sagittis sollicitudin. Proin id ante quis libero euismod imperdiet.
      </p>

      <h2>Design Considerations</h2>
      <p>
        Integer sed enim in sem bibendum cursus. Aliquam erat volutpat. Sed fringilla luctus velit, vitae convallis justo vehicula non. Nunc eu eros eu nunc bibendum commodo.
      </p>

      <h2>Advanced Usage</h2>
      <p>
        Morbi eu erat sed enim congue fermentum. Sed ac nulla dapibus, vestibulum lacus sed, scelerisque libero. Suspendisse potenti. Mauris at tincidunt nunc.
      </p>

      <h2>Summary</h2>
      <p>
        Aenean at velit nec elit pulvinar pretium. Phasellus id risus a justo luctus efficitur. Nunc malesuada tellus eget dignissim ullamcorper.
      </p>
      <p>
        Donec ut lorem feugiat, gravida tellus vel, porttitor turpis. Pellentesque accumsan orci et risus malesuada, ac convallis sem tincidunt.
      </p>
    `,
    author: 'Jeanne Hoffman',
    date: '2025-07-13',
  },
  {
    slug: 'typescript-write-safer-javascript-code',
    title: 'TypeScript: Write safer JavaScript with confidence',
    excerpt: 'Catches bugs before you run the code by adding static typing to JavaScript.',
    image: '/images/blog/typescript.png',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis, erat ut dapibus placerat, sapien urna volutpat erat, in luctus risus nulla in velit.
      </p>

      <h2>Introduction</h2>
      <p>
        Pellentesque ac tristique arcu. Aenean bibendum, orci nec euismod viverra, diam leo tincidunt arcu, nec lacinia metus leo vitae nibh. Vestibulum at finibus nibh.
      </p>

      <h2>Installation</h2>
      <p>
        Curabitur sed fermentum augue. Integer id metus at lacus efficitur sollicitudin at et risus. Etiam sed ante leo. Suspendisse potenti.
      </p>
      <p>
        Proin tincidunt, turpis nec efficitur finibus, augue ex volutpat erat, sed finibus erat nisl et lorem.
      </p>

      <h2>Configuration</h2>
      <p>
        Mauris congue nisi sed purus rhoncus facilisis. Vestibulum dictum sapien ac pretium fermentum. Integer blandit, turpis vel porttitor sollicitudin, nisi justo commodo leo, a imperdiet ante purus eget nisl.
      </p>

      <h2>Usage Tips</h2>
      <p>
        Sed vel justo eu lectus volutpat volutpat. In sit amet tortor at leo lobortis tincidunt a sed sapien. Praesent vel suscipit velit. Sed imperdiet id arcu sit amet condimentum.
      </p>

      <h2>Conclusion</h2>
      <p>
        Morbi a justo ac nunc suscipit congue. Ut convallis nisi in sagittis porttitor. Nulla sit amet tincidunt leo. Suspendisse sed est id ex aliquam imperdiet.
      </p>
      <p>
        Duis non magna nec ante fermentum congue. Sed malesuada, lorem at dignissim suscipit, enim erat luctus ex, a pulvinar orci velit vitae est.
      </p>
    `,
    author: 'Toney Buchanan',
    date: '2025-07-12',
  },
  {
    slug: 'vercel-ship-web-apps',
    title: 'Vercel: Ship web apps at the speed of push.',
    excerpt: 'One-command deployment with global CDN, built-in CI, and seamless support for Next.js and frontend frameworks.',
    image: '/images/blog/vercel.jpg',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non justo ut magna convallis iaculis. Nullam vel diam at orci lacinia imperdiet at nec risus.
      </p>

      <h2>Overview</h2>
      <p>
        Proin vitae neque ac lorem convallis tincidunt. Sed pharetra mi vel purus fermentum tempor. Quisque in mattis lacus. Nullam ut blandit augue.
      </p>
      <p>
        Integer porttitor urna non felis convallis, et euismod libero euismod. Suspendisse potenti. Curabitur sit amet bibendum erat.
      </p>

      <h2>Initial Setup</h2>
      <p>
        Aenean placerat convallis felis a cursus. Nulla at fermentum sapien. In semper, erat sed posuere porttitor, metus elit ullamcorper metus, nec vestibulum elit ligula a erat.
      </p>

      <h2>Deep Dive</h2>
      <p>
        Nam ut magna vel ligula faucibus imperdiet. Etiam ut sapien ut tortor scelerisque dignissim a nec justo. Cras ultricies diam a leo ultrices, ut laoreet velit pretium.
      </p>
      <p>
        Sed nec sollicitudin nulla. Nunc varius nisi quis risus blandit tincidunt. Etiam rhoncus leo vel nisi finibus congue.
      </p>
      <p>
        Suspendisse nec turpis vel ex dapibus scelerisque. Nulla facilisi. Duis porttitor tempor sem, ac hendrerit neque tincidunt vel.
      </p>

      <h2>Troubleshooting</h2>
      <p>
        Phasellus eu diam eget arcu cursus varius. Aliquam erat volutpat. Pellentesque nec arcu eu nisi tincidunt convallis ut non massa.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Cras ac lacus nec ex iaculis commodo. Sed ac erat ac lacus dictum cursus. Fusce ac tortor nulla. Morbi varius erat eu odio imperdiet, a iaculis elit consequat.
      </p>
      <p>
        Nunc id ligula ac libero mattis lacinia. Curabitur efficitur dapibus felis, in tempor justo varius a.
      </p>
    `,
    author: 'Maggie Strickland',
    date: '2025-07-10',
  },
  {
    slug: 'frontend-vs-backend-development',
    title: 'Frontend vs Backend Development?',
    excerpt: 'Frontend is what users see; backend is how it works.',
    image: '/images/blog/frontend-vs-backend.jpg',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis odio id urna fermentum iaculis. Vivamus ac sollicitudin nibh. Curabitur non purus ac arcu vestibulum accumsan.
      </p>

      <h2>Introduction</h2>
      <p>
        Integer vel sapien nec justo rhoncus efficitur. Etiam accumsan augue in massa rutrum, at convallis justo placerat. Sed eget eros ac enim facilisis ultricies.
      </p>

      <h2>Installation Guide</h2>
      <p>
        Nulla facilisi. Suspendisse dapibus fermentum arcu nec rutrum. Ut in risus at sapien luctus lacinia. Sed feugiat ante ac tellus fringilla feugiat.
      </p>
      <p>
        Vivamus nec libero nec neque sagittis efficitur. Curabitur sed tincidunt velit, nec feugiat nulla.
      </p>

      <h2>Key Features</h2>
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt blandit metus, at vulputate sem finibus ac.
      </p>
      <p>
        Donec tempor suscipit nulla, ut varius nisl pharetra ac. Proin in lorem vitae metus fermentum viverra.
      </p>
      <p>
        Morbi a turpis eget magna efficitur finibus. Integer ultricies risus in augue malesuada, ut facilisis lorem dapibus.
      </p>

      <h2>Limitations</h2>
      <p>
        Fusce iaculis, sem non facilisis vehicula, tortor augue dapibus nibh, in bibendum nisi ligula eget neque. Sed in suscipit elit. Mauris vehicula fermentum sem nec vulputate.
      </p>

      <h2>Conclusion</h2>
      <p>
        Nam porttitor dolor vitae lacus sollicitudin dapibus. Etiam in odio leo. Phasellus at metus vel nunc tincidunt viverra. Sed pretium magna eget lacus convallis, ac euismod nibh euismod.
      </p>
      <p>
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed sit amet lacinia erat, nec iaculis enim.
      </p>
    `,
    author: 'Aida Goodman',
    date: '2025-07-09',
  },
  {
    slug: 'vscode-the-lightweight-editor',
    title: 'VS Code: The lightweight editor that does everything.',
    excerpt: 'A fast, lightweight, and highly customizable code editor with powerful extensions, built-in Git, and intelligent developer tools.',
    image: '/images/blog/vscode.png',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent venenatis, sem in dignissim viverra, justo libero ultrices sapien, non tristique nulla magna ac justo.
      </p>

      <h2>Overview</h2>
      <p>
        Suspendisse potenti. Pellentesque euismod neque at nunc porta, sed commodo purus ultrices. Cras sed augue sit amet justo vulputate volutpat. Integer hendrerit fermentum nulla.
      </p>

      <h2>Setup Instructions</h2>
      <p>
        Aenean scelerisque nunc in posuere sollicitudin. Donec ut congue ex. Curabitur quis augue magna. Nullam nec hendrerit lorem. Phasellus finibus ex a massa efficitur imperdiet.
      </p>

      <h2>Usage</h2>
      <p>
        Proin dapibus, est ac pretium faucibus, arcu velit tristique nisl, eget luctus lorem justo non ex. Sed ut massa facilisis, tempor ante et, dignissim sapien.
      </p>
      <p>
        Ut sed mattis enim. Duis tincidunt enim nec eros commodo, in bibendum sapien consequat. Nam eget ultricies mauris.
      </p>

      <h2>Customization</h2>
      <p>
        Fusce ut nibh ac eros fermentum tincidunt. Quisque dapibus dapibus turpis, eget dictum tortor fermentum sit amet. Morbi vitae nulla id turpis fermentum tempus.
      </p>

      <h2>Troubleshooting</h2>
      <p>
        Aliquam erat volutpat. Donec at nunc vitae lorem malesuada placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      </p>
      <p>
        Sed rutrum arcu vel justo dictum, nec ultricies lorem tincidunt. Integer eu risus nec lacus hendrerit fermentum nec at urna.
      </p>

      <h2>Final Notes</h2>
      <p>
        Morbi a cursus libero, ac fermentum lorem. Maecenas suscipit sem nec nisl feugiat, eget blandit diam aliquam. Cras eget tempor magna, vel vulputate ipsum.
      </p>
    `,
    author: 'Chong Fuller',
    date: '2025-07-06',
  },
  {
    slug: 'terminal-control-your-entire-project',
    title: 'Terminal: Control your entire project with just your keyboard.',
    excerpt: 'A terminal is a text-based interface that lets you interact with your computer or project by typing commands instead of clicking buttons.',
    image: '/images/blog/terminal.png',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis lorem vitae justo gravida feugiat a ac magna. Etiam cursus libero sed orci fermentum tincidunt.
      </p>

      <h2>Introduction</h2>
      <p>
        Vivamus eu leo sed tellus sodales mattis. Curabitur nec erat nec augue tristique rhoncus. Phasellus vehicula, justo ut dapibus ultricies, est sapien interdum lacus, ut tristique neque risus vel ligula.
      </p>

      <h2>Planning Your Workflow</h2>
      <p>
        Nam vehicula semper ex nec rhoncus. Donec convallis sem quis justo mattis, a finibus erat sagittis. Duis vel risus a velit congue pulvinar.
      </p>
      <p>
        Pellentesque non arcu nec diam fringilla malesuada. Proin cursus, nibh ut lacinia viverra, nulla neque faucibus urna, nec malesuada odio felis vel mauris.
      </p>

      <h2>Executing the Project</h2>
      <p>
        Donec volutpat nulla nec lorem pulvinar, vitae lobortis nulla posuere. Morbi ac justo id erat vehicula euismod. Sed at tortor id eros tincidunt tincidunt in in libero.
      </p>

      <h2>Review and Optimization</h2>
      <p>
        Sed vel malesuada sapien, sed tempus purus. Maecenas faucibus lacus sed diam consectetur, at ultricies magna finibus. Integer cursus lorem nec nunc congue, in dictum erat congue.
      </p>

      <h2>Conclusion</h2>
      <p>
        Etiam vel nunc quam. Donec sed risus vitae enim porttitor mattis nec in nulla. Fusce tincidunt sem at orci volutpat laoreet. Praesent scelerisque velit vitae erat tincidunt, nec luctus justo condimentum.
      </p>
    `,
    author: 'Hector Stanley',
    date: '2025-07-06',
  },
  {
    slug: 'responsive-design-perfect-fit',
    title: 'Responsive design: One website, perfect fit for every screen.',
    excerpt: 'Responsive design ensures your website or app looks and works great on all screen sizes.',
    image: '/images/blog/responsive-design.jpg',
    content: `
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit imperdiet risus, ac pulvinar justo ultrices non. Pellentesque id nisi in libero lobortis dapibus.
      </p>

      <h2>Overview</h2>
      <p>
        Cras sit amet justo et ligula porttitor tincidunt. Ut pretium faucibus risus, eget porta neque condimentum sed. Suspendisse potenti. Curabitur vehicula sem nec neque bibendum, ut vehicula tellus suscipit.
      </p>

      <h2>Understanding the Basics</h2>
      <p>
        Donec non diam id dolor dignissim malesuada. Morbi a sapien ac tellus consequat dapibus. Sed in lacus sed lectus vestibulum hendrerit at vitae tellus.
      </p>

      <h2>Step-by-Step Guide</h2>
      <p>
        Integer luctus, nulla a iaculis bibendum, arcu ante pulvinar libero, et porttitor elit ante non enim. Nunc luctus ante a libero imperdiet, a pretium ex tincidunt.
      </p>
      <p>
        Aenean nec lorem non justo luctus tincidunt. In ac ligula metus. Praesent id augue eget lorem malesuada volutpat. Curabitur porta lectus sed turpis facilisis, in laoreet lacus laoreet.
      </p>

      <h2>Troubleshooting</h2>
      <p>
        Proin sed quam nec magna consequat ullamcorper. Maecenas varius, justo ac pulvinar mattis, nulla sapien accumsan turpis, nec rhoncus sapien nibh sed felis.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Sed ac libero ac erat posuere euismod. Duis quis massa id arcu commodo fermentum. Pellentesque tempor purus et risus dignissim, vel tempus libero tincidunt.
      </p>
      <p>
        Nunc ut erat at erat tincidunt aliquam. Etiam finibus, elit at euismod tristique, mauris libero maximus nibh, a ullamcorper arcu leo at velit.
      </p>
    `,
    author: 'Sara Mclean',
    date: '2025-07-05',
  },
  {
    slug: 'api-the-bridge-that-connects',
    title: 'API: The bridge that connects your frontend to the data it needs.',
    excerpt: 'An API (Application Programming Interface) lets different parts of your project or entirely different apps to talk to each other by sending and receiving data.',
    image: '/images/blog/api.png',
    content: `
      <p>
        In today’s fast-paced digital world, staying organized is essential for productivity. Whether you’re managing personal goals or professional projects, having a clear system can make all the difference.
      </p>

      <h2>Why Organization Matters</h2>
      <p>
        Organization helps reduce stress, saves time, and improves overall efficiency. By structuring tasks and responsibilities, you can focus better and achieve more meaningful results.
      </p>

      <h2>Choosing the Right Tools</h2>
      <p>
        There are countless productivity tools available—from simple to-do lists to full project management suites. The key is finding what fits your workflow. Apps like Notion, Trello, or even plain pen and paper can be effective.
      </p>

      <h2>Setting Realistic Goals</h2>
      <p>
        Break big objectives into smaller, manageable tasks. This approach keeps you motivated and makes it easier to track progress. Remember: consistency is more important than perfection.
      </p>

      <h2>Time Management Tips</h2>
      <p>
        Try techniques like the Pomodoro method, time blocking, or prioritizing tasks using the Eisenhower Matrix. These strategies help you stay on track and avoid burnout.
      </p>

      <h2>Reflect and Adjust</h2>
      <p>
        At the end of each week, take a moment to review what worked and what didn’t. Adjust your approach accordingly—flexibility is a strength, not a weakness.
      </p>

      <h2>Takeaway</h2>
      <p>
        Staying organized isn't about perfection; it's about creating systems that support your goals. With the right mindset and tools, you can take control of your time and focus on what truly matters.
      </p>
    `,
    author: 'Belinda Willis',
    date: '2025-07-03',
  },
  {
    slug: 'enc-flexible-configuration',
    title: '.env: Secure, flexible configuration for every environment.',
    excerpt: 'A .env file stores environment variables like API keys, database URLs, or secret tokens outside your source code to keep them secure and configurable.',
    image: '/images/blog/env.webp',
    content: `
      <p>
        The world of design is constantly evolving, influenced by culture, technology, and user behavior. Understanding these shifts can help designers stay relevant and create impactful work.
      </p>

      <h2>The Rise of Minimalism</h2>
      <p>
        Clean lines, whitespace, and limited color palettes have become a staple in modern design. This trend prioritizes clarity and usability, making interfaces more intuitive and visually appealing.
      </p>

      <h2>Dark Mode Everywhere</h2>
      <p>
        With the growing popularity of dark mode, designers are adapting their color choices and contrasts. Beyond aesthetics, it can also reduce eye strain and improve battery life on OLED screens.
      </p>

      <p>
        However, designing for dark mode isn't just about inverting colors. It requires thoughtful adjustments to ensure readability, visual hierarchy, and consistency across themes.
      </p>

      <h2>Microinteractions Matter</h2>
      <p>
        Small animations and transitions add personality to an interface. When done well, they guide users, offer feedback, and make experiences feel smoother and more polished.
      </p>

      <h2>Accessibility as a Priority</h2>
      <p>
        Inclusive design is no longer optional. Designers must consider users with varying abilities—using proper contrast ratios, keyboard navigation, and screen reader support to ensure access for all.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Design isn't just how things look—it's how they work. Staying informed, experimenting with new ideas, and listening to users are key to creating meaningful digital experiences.
      </p>
    `,
    author: 'Rufus Rice',
    date: '2025-07-03',
  },
];

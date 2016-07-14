# Junior Golf Hub UI Development

### Staging Server
https://astadiadigital.github.io/juniorgolfhub/dist/

### Dependencies
* Foundation http://foundation.zurb.com/docs/
* CodeKit https://incident57.com/codekit/
* BEM http://getbem.com/
* Git https://git-scm.com/

### Project Setup
Ensure you have CodeKit and are using the .Kit language for templating

### UI Development Workflow using CodeKit
**using codekit**

The UI development assets, such ass CSS, JavaScript, images, and fonts are compiled or built using CodeKit's UI Automation. A local development server is provided with CodeKit.

### UI Templates using .kit
Front-end templates are created using the kit language. You can view the documentation here: https://incident57.com/codekit/help.html#kit

### CSS / Sass Approach using BEM
This project uses the BEM (Block, Element, Modifier) approach to naming CSS components and classes (not used for Foundation-specific classes). To learn more about BEM, visit the following links:

* Tutorial / Walk Through: https://www.youtube.com/watch?v=lpxXHkZSl1Q
* https://en.bem.info/method/
* http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
* https://css-tricks.com/bem-101/
* http://getbem.com/introduction/
* http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/

### Git Branching Strategy

Use feature branches for new development and merge them into master (optional). Examples branches:

* chore/cleanup-ui
* bug/fix-nav
* feature/news-module

When done with a task or feature, issue a pull request to merge the feature into master.

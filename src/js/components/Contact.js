import { select, templates, classNames} from '../settings.js';


class Contact{
  constructor(element){
    const thisContact = this;

    thisContact.render(element);
    thisContact.initPage();
  }

  render(element){
    const thisContact = this;
    const generatedHTML = templates.contactWidget();

    thisContact.dom = {};
    thisContact.dom.wrapper = element;
    thisContact.dom.wrapper.innerHTML = generatedHTML;

  }

  activatePage(pageId){
    const thisContact = this;

    thisContact.pages = document.querySelector(select.containerOf.pages).children;
    thisContact.navLinks = document.querySelectorAll(select.nav.links);

    for(let page of thisContact.pages){
      page.classList.toggle(classNames.pages.active, page.id === pageId);
    }

    for(let link of thisContact.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') === '#' + pageId
      );
    }
  }

  initPage(){
    const thisContact = this;

    thisContact.links = document.querySelectorAll('.link');

    for(let link of thisContact.links){
      link.addEventListener('click', function(event){
        event.preventDefault;
        const clickedLink = this;
        const id = clickedLink.getAttribute('href').replace('#', '');

        thisContact.activatePage(id);
      });
    }
  }
}

export default Contact;
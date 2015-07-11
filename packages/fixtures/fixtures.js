(function () {

  'use strict';

  Meteor.methods({
    'fixtures/reset': function () {
      Letterpress.Collections.Pages.remove({});
    },
    'fixtures/page/create': function (pages) {

      // convert page to an array just in case it's a single page
      pages = [].concat(pages);

      // then create all pages
      for (var i=0; i < pages.length; i++) {
        Letterpress.Collections.Pages.insert(pages[i]);
      }
    },
    'fixtures/getSettings' : function() {
      return Meteor.settings;
    },
    'fixtures/setPaymentPlan' : function(plan) {
      Meteor.settings.private.paymentPlan = plan;
    },
    'fixtures/seedData' : function() {
      Letterpress.Collections.Pages.insert({
        path: '/',
        template: 'landing-page',
        markdown: '' +
        '![Cover](/cover.jpg "Cover")' +
        '\n\n' +
        '*Write your own book with this WYSIWYG markdown powered book app*' +
        '\n\n' +
        '[Try it](/try "Try It") [Buy It](# "Buy It")'
      });

      Letterpress.Collections.Pages.insert({
        title: 'Try',
        template: 'info',
        path: '/try',
        markdown: '' +
        '##Coming soon' +
        '\n\n' +
        '[Home](/ "Home")'
      });

      Letterpress.Collections.Pages.insert({
        title: 'Buy',
        template: 'info',
        path: '/buy',
        markdown: '' +
        '##Coming soon' +
        '\n\n' +
        '[Home](/ "Home")'
      });

      Letterpress.Collections.Pages.insert({
        title: 'Confirmation',
        template: 'info',
        path: '/subscription-confirmation',
        markdown: '' +
        '##Thank you for your purchase. You are now subscribed' +
        '\n\n' +
        '[Home](/ "Home")'
      });

      Letterpress.Collections.Pages.insert({
        title: 'Chapter 1',
        template: 'chapter',
        description: 'Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip ' +
        'proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeye ' +
        'leberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate. ' +
        'Doner venison nulla in excepteur alcatra magna ground round turkey veniam ullamco tri-tip ' +
        'in meatball. Landjaeger voluptate.',
        markdown: '' +
        loremIpsumBacon() +
        '\n\n' +
        '[Home](/ "Home")',
        order: 1
      });

      Letterpress.Collections.Pages.insert({
        title: 'Chapter 2',
        template: 'chapter',
        description: 'Id pork loin fatback, fugiat pancetta tri-tip leberkas pork belly frankfurter ' +
        'proident. Non cupim ex, sunt doner tail strip steak. Do tempor pork belly short loin, chuck ' +
        'pork ground round frankfurter corned beef. Salami voluptate in et, cillum duis tri-tip ' +
        'swine bresaola eu t-bone ribeye adipisicing.',
        markdown: '' +
        loremIpsumBacon() +
        '\n\n' +
        '[Home](/ "Home")',
        order: 2
      });

      function loremIpsumBacon () {
        return 'Bacon ipsum dolor amet do jerky chuck reprehenderit pork chop tempor ball tip ' +
          'proident tail velit pariatur jowl. Labore hamburger nisi, andouille meatball aute ribeye ' +
          'leberkas cupidatat. Dolore pastrami ball tip tenderloin ullamco nisi elit voluptate. ' +
          'Doner venison nulla in excepteur alcatra magna ground round turkey veniam ullamco tri-tip ' +
          'in meatball. Landjaeger voluptate commodo minim, pariatur pig kielbasa biltong nulla sint ' +
          'beef cillum.' +
          '\n\n' +
          'Id pork loin fatback, fugiat pancetta tri-tip leberkas pork belly frankfurter proident. ' +
          'Non cupim ex, sunt doner tail strip steak. Do tempor pork belly short loin, chuck pork ' +
          'ground round frankfurter corned beef. Salami voluptate in et, cillum duis tri-tip swine ' +
          'bresaola eu t-bone ribeye adipisicing.' +
          '\n\n' +
          'Sed ad leberkas dolore aute capicola deserunt in ribeye proident turkey. Ipsum pork loin ' +
          'cow excepteur commodo, ex ad non exercitation porchetta tongue nostrud pork chop aliqua. ' +
          'Brisket pork aute t-bone sunt enim elit nisi ex ut irure commodo esse nostrud. Est quis ' +
          'proident do. Excepteur quis eu velit.' +
          '\n\n' +
          'Occaecat fatback spare ribs sed pork pastrami. Adipisicing frankfurter dolore, hamburger ' +
          'corned beef drumstick venison. Tongue aute culpa salami alcatra adipisicing pork belly. ' +
          'Duis sed eiusmod, cillum mollit kielbasa pancetta qui meatball porchetta velit.' +
          '\n\n' +
          'Laboris jowl adipisicing beef ribs ham, lorem cillum mollit t-bone consectetur doner do ' +
          'nulla in. Non esse ut, filet mignon frankfurter tenderloin pancetta. Ullamco sausage ' +
          'excepteur, elit cupidatat velit pastrami ipsum chuck. Irure enim beef ribs mollit, ' +
          'landjaeger leberkas ullamco laborum chuck meatball pork loin. Eu irure flank chuck ' +
          'consectetur nulla in fatback sunt filet mignon.';

      }
    }
  });

})();
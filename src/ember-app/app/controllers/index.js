import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-услуг.caption'),
          title: i18n.t('forms.application.sitemap.справочник-услуг.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-услуга-l',
            caption: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-snezhko-eshhe-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-услуг.i-i-s-snezhko-eshhe-услуга-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.оплата.caption'),
          title: i18n.t('forms.application.sitemap.оплата.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-оплата-l',
            caption: i18n.t('forms.application.sitemap.оплата.i-i-s-snezhko-eshhe-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.оплата.i-i-s-snezhko-eshhe-оплата-l.title'),
            icon: 'calendar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.запись.caption'),
          title: i18n.t('forms.application.sitemap.запись.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-запись-l',
            caption: i18n.t('forms.application.sitemap.запись.i-i-s-snezhko-eshhe-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.запись.i-i-s-snezhko-eshhe-запись-l.title'),
            icon: 'tasks',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочник-материалы.caption'),
          title: i18n.t('forms.application.sitemap.справочник-материалы.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-материалы-l',
            caption: i18n.t('forms.application.sitemap.справочник-материалы.i-i-s-snezhko-eshhe-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-материалы.i-i-s-snezhko-eshhe-материалы-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-производитель-l',
            caption: i18n.t('forms.application.sitemap.справочник-материалы.i-i-s-snezhko-eshhe-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.справочник-материалы.i-i-s-snezhko-eshhe-производитель-l.title'),
            icon: 'chart bar',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудники.caption'),
          title: i18n.t('forms.application.sitemap.сотрудники.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-должность-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-eshhe-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-eshhe-должность-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-eshhe-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудники.i-i-s-snezhko-eshhe-сотрудники-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиент.caption'),
          title: i18n.t('forms.application.sitemap.клиент.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-клиент-l',
            caption: i18n.t('forms.application.sitemap.клиент.i-i-s-snezhko-eshhe-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.клиент.i-i-s-snezhko-eshhe-клиент-l.title'),
            icon: 'archive',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.боксы-марки.caption'),
          title: i18n.t('forms.application.sitemap.боксы-марки.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-марка-l',
            caption: i18n.t('forms.application.sitemap.боксы-марки.i-i-s-snezhko-eshhe-марка-l.caption'),
            title: i18n.t('forms.application.sitemap.боксы-марки.i-i-s-snezhko-eshhe-марка-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-бокс-l',
            caption: i18n.t('forms.application.sitemap.боксы-марки.i-i-s-snezhko-eshhe-бокс-l.caption'),
            title: i18n.t('forms.application.sitemap.боксы-марки.i-i-s-snezhko-eshhe-бокс-l.title'),
            icon: 'tags',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.регистр-записи.caption'),
          title: i18n.t('forms.application.sitemap.регистр-записи.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-регист-записи-l',
            caption: i18n.t('forms.application.sitemap.регистр-записи.i-i-s-snezhko-eshhe-регист-записи-l.caption'),
            title: i18n.t('forms.application.sitemap.регистр-записи.i-i-s-snezhko-eshhe-регист-записи-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})
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
          caption: i18n.t('forms.application.sitemap.snezhko-eshhe.caption'),
          title: i18n.t('forms.application.sitemap.snezhko-eshhe.title'),
          children: [{
            link: 'i-i-s-snezhko-eshhe-регист-записи-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-регист-записи-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-регист-записи-l.title'),
            icon: 'address card',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-оплата-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-оплата-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-должность-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-должность-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-сотрудники-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-сотрудники-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-сотрудники-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-запись-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-запись-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-клиент-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-клиент-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-материалы-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-материалы-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-материалы-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-производитель-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-производитель-l.title'),
            icon: 'chart line',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-бокс-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-бокс-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-бокс-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-марка-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-марка-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-марка-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-snezhko-eshhe-услуга-l',
            caption: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.snezhko-eshhe.i-i-s-snezhko-eshhe-услуга-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})
import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSnezhko_eshheБоксLForm from './forms/i-i-s-snezhko-eshhe-бокс-l';
import IISSnezhko_eshheДолжностьLForm from './forms/i-i-s-snezhko-eshhe-должность-l';
import IISSnezhko_eshheЗаписьLForm from './forms/i-i-s-snezhko-eshhe-запись-l';
import IISSnezhko_eshheКлиентLForm from './forms/i-i-s-snezhko-eshhe-клиент-l';
import IISSnezhko_eshheМаркаLForm from './forms/i-i-s-snezhko-eshhe-марка-l';
import IISSnezhko_eshheМатериалыLForm from './forms/i-i-s-snezhko-eshhe-материалы-l';
import IISSnezhko_eshheОплатаLForm from './forms/i-i-s-snezhko-eshhe-оплата-l';
import IISSnezhko_eshheПроизводительLForm from './forms/i-i-s-snezhko-eshhe-производитель-l';
import IISSnezhko_eshheРегистЗаписиLForm from './forms/i-i-s-snezhko-eshhe-регист-записи-l';
import IISSnezhko_eshheСотрудникиLForm from './forms/i-i-s-snezhko-eshhe-сотрудники-l';
import IISSnezhko_eshheУслугаLForm from './forms/i-i-s-snezhko-eshhe-услуга-l';
import IISSnezhko_eshheБоксEForm from './forms/i-i-s-snezhko-eshhe-бокс-e';
import IISSnezhko_eshheДолжностьEForm from './forms/i-i-s-snezhko-eshhe-должность-e';
import IISSnezhko_eshheЗаписьEForm from './forms/i-i-s-snezhko-eshhe-запись-e';
import IISSnezhko_eshheКлиентEForm from './forms/i-i-s-snezhko-eshhe-клиент-e';
import IISSnezhko_eshheМаркаEForm from './forms/i-i-s-snezhko-eshhe-марка-e';
import IISSnezhko_eshheМатериалыEForm from './forms/i-i-s-snezhko-eshhe-материалы-e';
import IISSnezhko_eshheОплатаEForm from './forms/i-i-s-snezhko-eshhe-оплата-e';
import IISSnezhko_eshheПроизводительEForm from './forms/i-i-s-snezhko-eshhe-производитель-e';
import IISSnezhko_eshheРегистЗаписиEForm from './forms/i-i-s-snezhko-eshhe-регист-записи-e';
import IISSnezhko_eshheСотрудникиEForm from './forms/i-i-s-snezhko-eshhe-сотрудники-e';
import IISSnezhko_eshheУслугаEForm from './forms/i-i-s-snezhko-eshhe-услуга-e';
import IISSnezhko_eshheАвтомобильModel from './models/i-i-s-snezhko-eshhe-автомобиль';
import IISSnezhko_eshheБоксModel from './models/i-i-s-snezhko-eshhe-бокс';
import IISSnezhko_eshheДолжностьModel from './models/i-i-s-snezhko-eshhe-должность';
import IISSnezhko_eshheЗаписьModel from './models/i-i-s-snezhko-eshhe-запись';
import IISSnezhko_eshheКлиентModel from './models/i-i-s-snezhko-eshhe-клиент';
import IISSnezhko_eshheМаркаModel from './models/i-i-s-snezhko-eshhe-марка';
import IISSnezhko_eshheМатериалыModel from './models/i-i-s-snezhko-eshhe-материалы';
import IISSnezhko_eshheОплатаModel from './models/i-i-s-snezhko-eshhe-оплата';
import IISSnezhko_eshheПроизводительModel from './models/i-i-s-snezhko-eshhe-производитель';
import IISSnezhko_eshheРегистЗаписиModel from './models/i-i-s-snezhko-eshhe-регист-записи';
import IISSnezhko_eshheСоставЗаписиModel from './models/i-i-s-snezhko-eshhe-состав-записи';
import IISSnezhko_eshheСоставУслугиModel from './models/i-i-s-snezhko-eshhe-состав-услуги';
import IISSnezhko_eshheСотрудникиModel from './models/i-i-s-snezhko-eshhe-сотрудники';
import IISSnezhko_eshheУслугаModel from './models/i-i-s-snezhko-eshhe-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-snezhko-eshhe-автомобиль': IISSnezhko_eshheАвтомобильModel,
    'i-i-s-snezhko-eshhe-бокс': IISSnezhko_eshheБоксModel,
    'i-i-s-snezhko-eshhe-должность': IISSnezhko_eshheДолжностьModel,
    'i-i-s-snezhko-eshhe-запись': IISSnezhko_eshheЗаписьModel,
    'i-i-s-snezhko-eshhe-клиент': IISSnezhko_eshheКлиентModel,
    'i-i-s-snezhko-eshhe-марка': IISSnezhko_eshheМаркаModel,
    'i-i-s-snezhko-eshhe-материалы': IISSnezhko_eshheМатериалыModel,
    'i-i-s-snezhko-eshhe-оплата': IISSnezhko_eshheОплатаModel,
    'i-i-s-snezhko-eshhe-производитель': IISSnezhko_eshheПроизводительModel,
    'i-i-s-snezhko-eshhe-регист-записи': IISSnezhko_eshheРегистЗаписиModel,
    'i-i-s-snezhko-eshhe-состав-записи': IISSnezhko_eshheСоставЗаписиModel,
    'i-i-s-snezhko-eshhe-состав-услуги': IISSnezhko_eshheСоставУслугиModel,
    'i-i-s-snezhko-eshhe-сотрудники': IISSnezhko_eshheСотрудникиModel,
    'i-i-s-snezhko-eshhe-услуга': IISSnezhko_eshheУслугаModel
  },

  'application-name': 'Snezhko_eshhe',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Snezhko_eshhe',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Snezhko_eshhe',
          title: 'Snezhko_eshhe'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'справочник-услуг': {
          caption: 'Справочник услуг',
          title: 'Справочник услуг',
          'i-i-s-snezhko-eshhe-услуга-l': {
            caption: 'Услуга',
            title: 'Услуга'
          }
        },
        оплата: {
          caption: 'Оплата',
          title: 'Оплата',
          'i-i-s-snezhko-eshhe-оплата-l': {
            caption: 'Оплата',
            title: 'Оплата'
          }
        },
        запись: {
          caption: 'Запись',
          title: 'Запись',
          'i-i-s-snezhko-eshhe-запись-l': {
            caption: 'Запись',
            title: 'Запись'
          }
        },
        'справочник-материалы': {
          caption: 'Справочник материалы',
          title: 'Справочник материалы',
          'i-i-s-snezhko-eshhe-материалы-l': {
            caption: 'Материалы',
            title: 'Материалы'
          },
          'i-i-s-snezhko-eshhe-производитель-l': {
            caption: 'Производитель',
            title: 'Производитель'
          }
        },
        сотрудники: {
          caption: 'Сотрудники',
          title: 'Сотрудники',
          'i-i-s-snezhko-eshhe-должность-l': {
            caption: 'Должность',
            title: 'Должность'
          },
          'i-i-s-snezhko-eshhe-сотрудники-l': {
            caption: 'Сотрудники',
            title: 'Сотрудники'
          }
        },
        клиент: {
          caption: 'Клиент',
          title: 'Клиент',
          'i-i-s-snezhko-eshhe-клиент-l': {
            caption: 'Клиент',
            title: 'Клиент'
          }
        },
        'боксы-марки': {
          caption: 'Боксы/Марки',
          title: 'Боксы/Марки',
          'i-i-s-snezhko-eshhe-марка-l': {
            caption: 'Марка',
            title: 'Марка'
          },
          'i-i-s-snezhko-eshhe-бокс-l': {
            caption: 'Бокс',
            title: 'Бокс'
          }
        },
        'регистр-записи': {
          caption: 'Регистр записи',
          title: 'Регистр записи',
          'i-i-s-snezhko-eshhe-регист-записи-l': {
            caption: 'РегистЗаписи',
            title: 'Регист записи'
          }
        },
        'snezhko-eshhe': {
          caption: 'Snezhko_eshhe',
          title: 'Snezhko_eshhe',
          'i-i-s-snezhko-eshhe-регист-записи-l': {
            caption: 'Регист записи',
            title: ''
          },
          'i-i-s-snezhko-eshhe-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-snezhko-eshhe-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-snezhko-eshhe-сотрудники-l': {
            caption: 'Сотрудники',
            title: ''
          },
          'i-i-s-snezhko-eshhe-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-snezhko-eshhe-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-snezhko-eshhe-материалы-l': {
            caption: 'Материалы',
            title: ''
          },
          'i-i-s-snezhko-eshhe-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-snezhko-eshhe-бокс-l': {
            caption: 'Бокс',
            title: ''
          },
          'i-i-s-snezhko-eshhe-марка-l': {
            caption: 'Марка',
            title: ''
          },
          'i-i-s-snezhko-eshhe-услуга-l': {
            caption: 'Услуга',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-snezhko-eshhe-бокс-l': IISSnezhko_eshheБоксLForm,
    'i-i-s-snezhko-eshhe-должность-l': IISSnezhko_eshheДолжностьLForm,
    'i-i-s-snezhko-eshhe-запись-l': IISSnezhko_eshheЗаписьLForm,
    'i-i-s-snezhko-eshhe-клиент-l': IISSnezhko_eshheКлиентLForm,
    'i-i-s-snezhko-eshhe-марка-l': IISSnezhko_eshheМаркаLForm,
    'i-i-s-snezhko-eshhe-материалы-l': IISSnezhko_eshheМатериалыLForm,
    'i-i-s-snezhko-eshhe-оплата-l': IISSnezhko_eshheОплатаLForm,
    'i-i-s-snezhko-eshhe-производитель-l': IISSnezhko_eshheПроизводительLForm,
    'i-i-s-snezhko-eshhe-регист-записи-l': IISSnezhko_eshheРегистЗаписиLForm,
    'i-i-s-snezhko-eshhe-сотрудники-l': IISSnezhko_eshheСотрудникиLForm,
    'i-i-s-snezhko-eshhe-услуга-l': IISSnezhko_eshheУслугаLForm,
    'i-i-s-snezhko-eshhe-бокс-e': IISSnezhko_eshheБоксEForm,
    'i-i-s-snezhko-eshhe-должность-e': IISSnezhko_eshheДолжностьEForm,
    'i-i-s-snezhko-eshhe-запись-e': IISSnezhko_eshheЗаписьEForm,
    'i-i-s-snezhko-eshhe-клиент-e': IISSnezhko_eshheКлиентEForm,
    'i-i-s-snezhko-eshhe-марка-e': IISSnezhko_eshheМаркаEForm,
    'i-i-s-snezhko-eshhe-материалы-e': IISSnezhko_eshheМатериалыEForm,
    'i-i-s-snezhko-eshhe-оплата-e': IISSnezhko_eshheОплатаEForm,
    'i-i-s-snezhko-eshhe-производитель-e': IISSnezhko_eshheПроизводительEForm,
    'i-i-s-snezhko-eshhe-регист-записи-e': IISSnezhko_eshheРегистЗаписиEForm,
    'i-i-s-snezhko-eshhe-сотрудники-e': IISSnezhko_eshheСотрудникиEForm,
    'i-i-s-snezhko-eshhe-услуга-e': IISSnezhko_eshheУслугаEForm
  },

});

export default translations;

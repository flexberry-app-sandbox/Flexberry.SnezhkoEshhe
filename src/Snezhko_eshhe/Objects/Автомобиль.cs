﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Snezhko_eshhe
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Автомобиль.
    /// </summary>
    // *** Start programmer edit section *** (Автомобиль CustomAttributes)

    // *** End programmer edit section *** (Автомобиль CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("АвтомобильE", new string[] {
            "ГосНомер as \'Гос номер\'",
            "Цвет as \'Цвет\'",
            "ТипАвтомобиля as \'Тип автомобиля\'",
            "Марка as \'Марка\'",
            "Марка.Название as \'Название\'"}, Hidden=new string[] {
            "Марка.Название"})]
    [MasterViewDefineAttribute("АвтомобильE", "Марка", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Название")]
    public class Автомобиль : ICSSoft.STORMNET.DataObject
    {
        
        private string fГосНомер;
        
        private string fЦвет;
        
        private IIS.Snezhko_eshhe.ТипАвтомобиля fТипАвтомобиля;
        
        private IIS.Snezhko_eshhe.Марка fМарка;
        
        private IIS.Snezhko_eshhe.Клиент fКлиент;
        
        // *** Start programmer edit section *** (Автомобиль CustomMembers)

        // *** End programmer edit section *** (Автомобиль CustomMembers)

        
        /// <summary>
        /// ГосНомер.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.ГосНомер CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.ГосНомер CustomAttributes)
        [StrLen(255)]
        public virtual string ГосНомер
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Get start)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Get start)
                string result = this.fГосНомер;
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Get end)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Set start)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Set start)
                this.fГосНомер = value;
                // *** Start programmer edit section *** (Автомобиль.ГосНомер Set end)

                // *** End programmer edit section *** (Автомобиль.ГосНомер Set end)
            }
        }
        
        /// <summary>
        /// ТипАвтомобиля.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.ТипАвтомобиля CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.ТипАвтомобиля CustomAttributes)
        public virtual IIS.Snezhko_eshhe.ТипАвтомобиля ТипАвтомобиля
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.ТипАвтомобиля Get start)

                // *** End programmer edit section *** (Автомобиль.ТипАвтомобиля Get start)
                IIS.Snezhko_eshhe.ТипАвтомобиля result = this.fТипАвтомобиля;
                // *** Start programmer edit section *** (Автомобиль.ТипАвтомобиля Get end)

                // *** End programmer edit section *** (Автомобиль.ТипАвтомобиля Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.ТипАвтомобиля Set start)

                // *** End programmer edit section *** (Автомобиль.ТипАвтомобиля Set start)
                this.fТипАвтомобиля = value;
                // *** Start programmer edit section *** (Автомобиль.ТипАвтомобиля Set end)

                // *** End programmer edit section *** (Автомобиль.ТипАвтомобиля Set end)
            }
        }
        
        /// <summary>
        /// Цвет.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.Цвет CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.Цвет CustomAttributes)
        [StrLen(255)]
        public virtual string Цвет
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.Цвет Get start)

                // *** End programmer edit section *** (Автомобиль.Цвет Get start)
                string result = this.fЦвет;
                // *** Start programmer edit section *** (Автомобиль.Цвет Get end)

                // *** End programmer edit section *** (Автомобиль.Цвет Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.Цвет Set start)

                // *** End programmer edit section *** (Автомобиль.Цвет Set start)
                this.fЦвет = value;
                // *** Start programmer edit section *** (Автомобиль.Цвет Set end)

                // *** End programmer edit section *** (Автомобиль.Цвет Set end)
            }
        }
        
        /// <summary>
        /// Автомобиль.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.Марка CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.Марка CustomAttributes)
        [PropertyStorage(new string[] {
                "Марка"})]
        [NotNull()]
        public virtual IIS.Snezhko_eshhe.Марка Марка
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.Марка Get start)

                // *** End programmer edit section *** (Автомобиль.Марка Get start)
                IIS.Snezhko_eshhe.Марка result = this.fМарка;
                // *** Start programmer edit section *** (Автомобиль.Марка Get end)

                // *** End programmer edit section *** (Автомобиль.Марка Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.Марка Set start)

                // *** End programmer edit section *** (Автомобиль.Марка Set start)
                this.fМарка = value;
                // *** Start programmer edit section *** (Автомобиль.Марка Set end)

                // *** End programmer edit section *** (Автомобиль.Марка Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Snezhko_eshhe.Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Автомобиль.Клиент CustomAttributes)

        // *** End programmer edit section *** (Автомобиль.Клиент CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Клиент"})]
        public virtual IIS.Snezhko_eshhe.Клиент Клиент
        {
            get
            {
                // *** Start programmer edit section *** (Автомобиль.Клиент Get start)

                // *** End programmer edit section *** (Автомобиль.Клиент Get start)
                IIS.Snezhko_eshhe.Клиент result = this.fКлиент;
                // *** Start programmer edit section *** (Автомобиль.Клиент Get end)

                // *** End programmer edit section *** (Автомобиль.Клиент Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Автомобиль.Клиент Set start)

                // *** End programmer edit section *** (Автомобиль.Клиент Set start)
                this.fКлиент = value;
                // *** Start programmer edit section *** (Автомобиль.Клиент Set end)

                // *** End programmer edit section *** (Автомобиль.Клиент Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "АвтомобильE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View АвтомобильE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("АвтомобильE", typeof(IIS.Snezhko_eshhe.Автомобиль));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Автомобиль.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfАвтомобиль CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfАвтомобиль CustomAttributes)
    public class DetailArrayOfАвтомобиль : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Snezhko_eshhe.DetailArrayOfАвтомобиль members)

        // *** End programmer edit section *** (IIS.Snezhko_eshhe.DetailArrayOfАвтомобиль members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Автомобиль by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Автомобиль.
        /// </summary>
        public DetailArrayOfАвтомобиль(IIS.Snezhko_eshhe.Клиент fКлиент) : 
                base(typeof(Автомобиль), ((ICSSoft.STORMNET.DataObject)(fКлиент)))
        {
        }
        
        public IIS.Snezhko_eshhe.Автомобиль this[int index]
        {
            get
            {
                return ((IIS.Snezhko_eshhe.Автомобиль)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Snezhko_eshhe.Автомобиль dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}

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
    /// Регист записи.
    /// </summary>
    // *** Start programmer edit section *** (РегистЗаписи CustomAttributes)

    // *** End programmer edit section *** (РегистЗаписи CustomAttributes)
    [AutoAltered()]
    [Caption("Регист записи")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("РегистЗаписиE", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "Сумма as \'Сумма\'"})]
    [View("РегистЗаписиL", new string[] {
            "КодЗаписи as \'Код записи\'",
            "Дата as \'Дата\'",
            "Время as \'Время\'",
            "Сумма as \'Сумма\'"})]
    public class РегистЗаписи : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата = System.DateTime.Now;
        
        private string fВремя;
        
        private double fСумма;
        
        private int fКодЗаписи;
        
        // *** Start programmer edit section *** (РегистЗаписи CustomMembers)

        // *** End programmer edit section *** (РегистЗаписи CustomMembers)

        
        /// <summary>
        /// Время.
        /// </summary>
        // *** Start programmer edit section *** (РегистЗаписи.Время CustomAttributes)

        // *** End programmer edit section *** (РегистЗаписи.Время CustomAttributes)
        [StrLen(255)]
        public virtual string Время
        {
            get
            {
                // *** Start programmer edit section *** (РегистЗаписи.Время Get start)

                // *** End programmer edit section *** (РегистЗаписи.Время Get start)
                string result = this.fВремя;
                // *** Start programmer edit section *** (РегистЗаписи.Время Get end)

                // *** End programmer edit section *** (РегистЗаписи.Время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистЗаписи.Время Set start)

                // *** End programmer edit section *** (РегистЗаписи.Время Set start)
                this.fВремя = value;
                // *** Start programmer edit section *** (РегистЗаписи.Время Set end)

                // *** End programmer edit section *** (РегистЗаписи.Время Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (РегистЗаписи.Дата CustomAttributes)

        // *** End programmer edit section *** (РегистЗаписи.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (РегистЗаписи.Дата Get start)

                // *** End programmer edit section *** (РегистЗаписи.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (РегистЗаписи.Дата Get end)

                // *** End programmer edit section *** (РегистЗаписи.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистЗаписи.Дата Set start)

                // *** End programmer edit section *** (РегистЗаписи.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (РегистЗаписи.Дата Set end)

                // *** End programmer edit section *** (РегистЗаписи.Дата Set end)
            }
        }
        
        /// <summary>
        /// КодЗаписи.
        /// </summary>
        // *** Start programmer edit section *** (РегистЗаписи.КодЗаписи CustomAttributes)

        // *** End programmer edit section *** (РегистЗаписи.КодЗаписи CustomAttributes)
        public virtual int КодЗаписи
        {
            get
            {
                // *** Start programmer edit section *** (РегистЗаписи.КодЗаписи Get start)

                // *** End programmer edit section *** (РегистЗаписи.КодЗаписи Get start)
                int result = this.fКодЗаписи;
                // *** Start programmer edit section *** (РегистЗаписи.КодЗаписи Get end)

                // *** End programmer edit section *** (РегистЗаписи.КодЗаписи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистЗаписи.КодЗаписи Set start)

                // *** End programmer edit section *** (РегистЗаписи.КодЗаписи Set start)
                this.fКодЗаписи = value;
                // *** Start programmer edit section *** (РегистЗаписи.КодЗаписи Set end)

                // *** End programmer edit section *** (РегистЗаписи.КодЗаписи Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (РегистЗаписи.Сумма CustomAttributes)

        // *** End programmer edit section *** (РегистЗаписи.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (РегистЗаписи.Сумма Get start)

                // *** End programmer edit section *** (РегистЗаписи.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (РегистЗаписи.Сумма Get end)

                // *** End programmer edit section *** (РегистЗаписи.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (РегистЗаписи.Сумма Set start)

                // *** End programmer edit section *** (РегистЗаписи.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (РегистЗаписи.Сумма Set end)

                // *** End programmer edit section *** (РегистЗаписи.Сумма Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "РегистЗаписиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистЗаписиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистЗаписиE", typeof(IIS.Snezhko_eshhe.РегистЗаписи));
                }
            }
            
            /// <summary>
            /// "РегистЗаписиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View РегистЗаписиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("РегистЗаписиL", typeof(IIS.Snezhko_eshhe.РегистЗаписи));
                }
            }
        }
    }
}

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
    /// Марка.
    /// </summary>
    // *** Start programmer edit section *** (Марка CustomAttributes)

    // *** End programmer edit section *** (Марка CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МаркаE", new string[] {
            "Код as \'Код\'",
            "Название as \'Название\'"})]
    [View("МаркаL", new string[] {
            "Код as \'Код\'",
            "Название as \'Название\'"})]
    public class Марка : ICSSoft.STORMNET.DataObject
    {
        
        private int fКод;
        
        private string fНазвание;
        
        // *** Start programmer edit section *** (Марка CustomMembers)

        // *** End programmer edit section *** (Марка CustomMembers)

        
        /// <summary>
        /// Код.
        /// </summary>
        // *** Start programmer edit section *** (Марка.Код CustomAttributes)

        // *** End programmer edit section *** (Марка.Код CustomAttributes)
        public virtual int Код
        {
            get
            {
                // *** Start programmer edit section *** (Марка.Код Get start)

                // *** End programmer edit section *** (Марка.Код Get start)
                int result = this.fКод;
                // *** Start programmer edit section *** (Марка.Код Get end)

                // *** End programmer edit section *** (Марка.Код Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Марка.Код Set start)

                // *** End programmer edit section *** (Марка.Код Set start)
                this.fКод = value;
                // *** Start programmer edit section *** (Марка.Код Set end)

                // *** End programmer edit section *** (Марка.Код Set end)
            }
        }
        
        /// <summary>
        /// Название.
        /// </summary>
        // *** Start programmer edit section *** (Марка.Название CustomAttributes)

        // *** End programmer edit section *** (Марка.Название CustomAttributes)
        [StrLen(255)]
        public virtual string Название
        {
            get
            {
                // *** Start programmer edit section *** (Марка.Название Get start)

                // *** End programmer edit section *** (Марка.Название Get start)
                string result = this.fНазвание;
                // *** Start programmer edit section *** (Марка.Название Get end)

                // *** End programmer edit section *** (Марка.Название Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Марка.Название Set start)

                // *** End programmer edit section *** (Марка.Название Set start)
                this.fНазвание = value;
                // *** Start programmer edit section *** (Марка.Название Set end)

                // *** End programmer edit section *** (Марка.Название Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МаркаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МаркаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МаркаE", typeof(IIS.Snezhko_eshhe.Марка));
                }
            }
            
            /// <summary>
            /// "МаркаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МаркаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МаркаL", typeof(IIS.Snezhko_eshhe.Марка));
                }
            }
        }
    }
}

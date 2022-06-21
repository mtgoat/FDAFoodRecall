using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using System;
using System.Diagnostics;
using System.Xml;
using System.Xml.Schema;

namespace SafeShoppingList
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();


            ////validate xml 
            //XmlSchemaSet xmlSchemaSet = new();

            //xmlSchemaSet.Add("", "2022.xsd");

            //XmlDocument xmlDoc = new XmlDocument();
            //xmlDoc.Load(@"C:\Users\johnn\workspace\backend\safeShoppingList\SafeShoppingList\SafeShoppingList\2022.xml");

            //ValidateXML(xmlDoc);

            //public static void ValidateXML(XmlDocument xmlDoc)
            //{
            //    XmlReaderSettings xmlReaderSettings = new XmlReaderSettings();

            //    xmlReaderSettings.ValidationType = ValidationType.Schema;

            //    XmlSchemaSet xmlSchemaSet = new XmlSchemaSet();

            //    xmlSchemaSet.Add("", "2022.xsd");


            //    xmlReaderSettings.Schemas = xmlSchemaSet;
            //    xmlReaderSettings.ValidationEventHandler += ValidationEventHandler;

            //    XmlReader reader = XmlReader.Create(@"C:\Users\johnn\workspace\backend\safeShoppingList\ValidateXML\ValidateXML\2022.xml");

            //    while (reader.Read())
            //    {

            //    }

            //    Console.WriteLine("good to go");
            //}

            //static void ValidationEventHandler(object sender, ValidationEventArgs eventArgs)
            //{
            //    Console.WriteLine(eventArgs.Message);
            //}

        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}

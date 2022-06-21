using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Xml.Linq;

namespace SafeShoppingList.Repositories
{
    public class RecallRepository : IRecallRepository
    {
        public List<string> Search(string BrandName, string PDescription, string Company)
        {
            XDocument doc = XDocument.Load(@"C:\Users\johnn\workspace\backend\SafeShoppingList\SafeShoppingList\RecallTest.xml");

            List<string> stringlist = new List<string>();

            IEnumerable<XNode> elemListBrand = from recalls in doc.Root.Elements("recalls")
                                               where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                               select recalls.Element("Brand");

            int i = 1;
            foreach (XNode element in elemListBrand)
            {
                stringlist.Add("Id " + i + element.ToString());
                i++;
            }

            IEnumerable<XNode> elemListPD = from recalls in doc.Root.Elements("recalls")
                                            where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                            select recalls.Element("ProductDescription");
            int j = 1;
            foreach (XNode element in elemListPD)
            {

                stringlist.Add("Id " + j + element.ToString());
                j++;
            }

            IEnumerable<XNode> elemListComp = from recalls in doc.Root.Elements("recalls")
                                              where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                              select recalls.Element("Company");

            int k = 1;
            foreach (XNode element in elemListComp)
            {

                stringlist.Add("Id " + k + element.ToString());
                k++;
            }

            IEnumerable<XNode> elemListReason = from recalls in doc.Root.Elements("recalls")
                                                where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                                select recalls.Element("Reason");

            int l = 1;
            foreach (XNode element in elemListReason)
            {

                stringlist.Add("Id " + l + element.ToString());
                l++;
            }

            IEnumerable<XNode> elemListUrl = from recalls in doc.Root.Elements("recalls")
                                             where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                             select recalls.Element("Url");

            int m = 1;
            foreach (XNode element in elemListUrl)
            {

                stringlist.Add("Id " + m + element.ToString());
                m++;
            }

            return stringlist;
        }
    }
}
    


using System;
using System.Linq;
using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using System.Xml.Linq;
using SafeShoppingList.Models;

namespace SafeShoppingList.Repositories
{
    public class RecallRepository : IRecallRepository
    {
        public List<SearchResult> Search(string BrandName, string PDescription, string Company)
        {
            XDocument doc = XDocument.Load(@"C:\Users\johnn\workspace\backend\SafeShoppingList\SafeShoppingList\RecallTest.xml");

            ////function? 
            //SearchResult result1 = new SearchResult();
            //SearchResult result2 = new SearchResult();

            var results = new List<SearchResult>();

            IEnumerable<XNode> elemListBrand = from recalls in doc.Root.Elements("recalls")
                                               where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                               select recalls.Element("Brand");

            int i = 1;
            foreach (XNode element in elemListBrand)
            {
                results.Add(new SearchResult()
                {
                    Id = i,
                    Brand = element.ToString(),
                });
                i++;
            }

            foreach (SearchResult result in results)
            {
                result.Brand = result.Brand.Replace("<Brand>", "").Replace("</Brand>", "");
            }



            IEnumerable<XNode> elemListPD = from recalls in doc.Root.Elements("recalls")
                                            where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                            select recalls.Element("ProductDescription");

            int j = 0;
            foreach (XNode element in elemListPD)
            {

                results[j].ProductDescription = element.ToString();
                j++;
            }

            foreach (SearchResult result in results)
            {
                result.ProductDescription = result.ProductDescription.Replace("<ProductDescription>", "").Replace("</ProductDescription>", "");
            }

            IEnumerable<XNode> elemListComp = from recalls in doc.Root.Elements("recalls")
                                              where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                              select recalls.Element("Company");

            int k = 0;
            foreach (XNode element in elemListComp)
            {

                   results[k].Company = element.ToString();
                k++;
              }

            foreach (SearchResult result in results)
            {
                result.Company = result.Company.Replace("<Company>", "").Replace("</Company>", "");
            }

            IEnumerable<XNode> elemListReason = from recalls in doc.Root.Elements("recalls")
                                                where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                                select recalls.Element("Reason");

            int l = 0;
            foreach (XNode element in elemListReason)
            {

                results[l].Reason = element.ToString();
                l++;
            }

            foreach (SearchResult result in results)
            {
                result.Reason = result.Reason.Replace("<Reason>", "").Replace("</Reason>", "");
            }

            IEnumerable<XNode> elemListUrl = from recalls in doc.Root.Elements("recalls")
                                             where recalls.Element("Brand").Value.Contains(BrandName) && recalls.Element("ProductDescription").Value.Contains(PDescription) && recalls.Element("Company").Value.Contains(Company)
                                             select recalls.Element("Url");

            int m = 0;
            foreach (XNode element in elemListUrl)
            {

                results[m].URL = element.ToString();
                m++;
            }

            foreach (SearchResult result in results)
            {
                result.URL = result.URL.Replace("<Url>\r\n\t\t\t", "").Replace("\r\n\t\t</Url>", "");
            }
            return results;
        }
    }
}
    


using System;

namespace SafeShoppingList.Models
{
    public class SearchResult
    {
        public int Id { get; set; }
        public string Brand { get; set; }
   
        public string ProductDescription { get; set; }
        public string Company { get; set; }
        public string Reason { get; set; }

        public string URL { get; set; }

        
    }
}

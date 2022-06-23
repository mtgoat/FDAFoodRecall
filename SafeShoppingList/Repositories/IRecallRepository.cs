using System.Collections.Generic;
using SafeShoppingList.Models;


namespace SafeShoppingList.Repositories
{
    public interface IRecallRepository
    {
        List<SearchResult> Search(string BrandName, string PDescription, string Company);
    }
}
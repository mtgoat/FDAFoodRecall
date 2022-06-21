using System.Collections.Generic;

namespace SafeShoppingList.Repositories
{
    public interface IRecallRepository
    {
        List<string> Search(string BrandName, string PDescription, string Company);
    }
}
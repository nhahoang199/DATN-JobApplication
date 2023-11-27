using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Helpers
{
    public static class PagedListExtensions
    {
        public static string GetHeader<T>(this PagedList<T> list)
        {
            var paginationHeader = new
            {
                currentPage = list.CurrentPage,
                pageSize = list.PageSize,
                totalCount = list.TotalCount,
                totalPages = list.TotalPages,
                hasPrevious = list.HasPrevious,
                hasNext = list.HasNext
            };

            return JsonConvert.SerializeObject(paginationHeader);
        }
    }

}

using JobApplicationProject.Core.Models;
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
        public static PaginationModel GetPagination<T>(this PagedList<T> list)
        {
            var paginationHeader = new PaginationModel()
            {
                CurrentPage = list.CurrentPage,
                PageSize = list.PageSize,
                TotalCount = list.TotalCount,
                TotalPages = list.TotalPages,
                HasPrevious = list.HasPrevious,
                HasNext = list.HasNext
            };

            return paginationHeader;
        }
    }

}

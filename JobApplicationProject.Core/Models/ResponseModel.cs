using JobApplicationProject.Core.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Models
{
    public class ResponseModel<T>
    {
        public PagedList<T> Items { get; set; }
        public PaginationModel PaginationInfo { get; set; }
        public ResponseModel(PagedList<T> items, PaginationModel paginationInfo)
        {
            Items = items;
            PaginationInfo = paginationInfo;
        }
    }
    public class PaginationModel
    {
        public int CurrentPage { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }
        public int TotalPages { get; set; }
        public bool HasPrevious { get; set; }
        public bool HasNext { get; set; }
    }
}

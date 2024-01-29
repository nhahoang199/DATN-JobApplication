using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

namespace JobApplicationProject.Core.Helpers
{
    public class PagedList<T> : List<T>
    {
        public int CurrentPage { get; private set; }
        public int TotalPages { get; private set; }
        public int PageSize { get; private set; }
        public int TotalCount { get; private set; }

        public bool HasPrevious => CurrentPage > 1;
        public bool HasNext => CurrentPage < TotalPages;

        public PagedList(List<T> items, int count, int page, int pageSize, int totalPages)
        {
            TotalCount = count;
            PageSize = pageSize;
            CurrentPage = page;
            TotalPages = totalPages;
            AddRange(items);
        }

        public static async Task<PagedList<T>> ToPagedList(IQueryable<T> source, int pageNumber, int pageSize, Expression<Func<T, object>> orderBy = null)
        {
            //var count = await source.CountAsync();
            //var totalPages = (int)Math.Ceiling(count / (double)pageSize);
            //var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

            //return new PagedList<T>(items, count, pageNumber, pageSize, totalPages);

            if (orderBy == null)
            {
                orderBy = x => x;
            }

            // Apply OrderBy before Skip and Take
            source = source.OrderBy(orderBy);

            var count = await source.CountAsync();
            var totalPages = (int)Math.Ceiling(count / (double)pageSize);
            var items = await source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToListAsync();

            return new PagedList<T>(items, count, pageNumber, pageSize, totalPages);
        }
    }
}

using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using vride.Models;

namespace vride.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<User> User { get; set; }
    }

}

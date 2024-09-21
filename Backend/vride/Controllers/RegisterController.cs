using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;
using System.Drawing;
using vride.Data;
using vride.DTOs;
using vride.Models;

namespace vride.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private DataContext _context;

        public RegisterController(DataContext context)
        {
            _context= context;
        }


        [HttpPost]
        public async Task<User> Post([FromBody] RegisterDto value)
        {
            
            User user = new User
            {
                Reg_no = value.Reg_no,
                Username= value.username,
                PassWord =value.password,
            };
            await _context.User.AddAsync(user);
            _context.SaveChangesAsync();
            return user;
        }
    }
}

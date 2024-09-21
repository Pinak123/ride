using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vride.Data;
using vride.DTOs;
using vride.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace vride.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase

    {
        private DataContext _context;

        public LoginController(DataContext context )
        {
            _context = context;
        }
        // GET: api/<LoginController>
        [HttpGet]
        public async Task<IEnumerable<User>> Get()
        {
             List<User> users = await _context.User.ToListAsync();
            return users;
        }

        // GET api/<LoginController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<LoginController>
        [HttpPost("/lg")]
        public async Task<User> Post([FromBody] LoginDto value)
        {
            User user = new User
            {
                Reg_no = value.Reg_no,
                Username = value.Username,
                PassWord = value.password,
            };
            var res = await _context.User.FirstOrDefaultAsync(p => p.Username == value.Username && p.PassWord == value.password);
            if (res == null) { Console.WriteLine("The user not found"); };
            return user;
        }

        // PUT api/<LoginController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<LoginController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

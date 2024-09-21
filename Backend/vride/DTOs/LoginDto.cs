using System.ComponentModel.DataAnnotations;

namespace vride.DTOs
{
    public class LoginDto
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Reg_no { get; set; }
        [Required]
        public string password { get; set; }
    }
}

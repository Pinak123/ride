using System.ComponentModel.DataAnnotations;

namespace vride.DTOs
{
    public class RegisterDto
    {
        [Required]
        public string Reg_no { get; set; }
        [Required]
        public string password { get; set; }
    }
}

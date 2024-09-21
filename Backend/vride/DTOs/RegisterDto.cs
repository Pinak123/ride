using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace vride.DTOs
{
    public class RegisterDto
    {
        [Key]
        public int Sr_No { get; set; }
        [Required]
        public string Reg_no { get; set; }
        [Required]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
    }
}

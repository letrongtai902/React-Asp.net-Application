using System.ComponentModel.DataAnnotations;

namespace UmaiFood.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}
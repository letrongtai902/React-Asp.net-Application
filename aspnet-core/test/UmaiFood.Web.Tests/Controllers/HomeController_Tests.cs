using System.Threading.Tasks;
using UmaiFood.Models.TokenAuth;
using UmaiFood.Web.Controllers;
using Shouldly;
using Xunit;

namespace UmaiFood.Web.Tests.Controllers
{
    public class HomeController_Tests: UmaiFoodWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}
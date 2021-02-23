using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Reflection;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Controllers
{


    [EnableCors]
    [ApiController]
    [Route("[controller]")]
    public class LoanController : ControllerBase
    {

        [HttpPost("generate-schedule")]
        public ActionResult<LoanSchedule> GetAppInfo([FromBody] ILoan loan)
        {
            return Ok(loan.CreateLoanSchedule());
        }

    }

}
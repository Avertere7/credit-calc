using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Reflection;
using WebApi.Interfaces;
using WebApi.Models;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoanController : ControllerBase
    {
        [EnableCors("MyCors")]
        [HttpPost("/test")]
        public ActionResult<List<LoanScheduleRow>> GetAppInfo([FromBody] ILoan loan)
        {
            return Ok();
        }

    }

}
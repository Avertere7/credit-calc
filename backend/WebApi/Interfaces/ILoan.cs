using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApi.Models;

namespace WebApi.Interfaces
{
    public interface ILoan
    {
        public double LoanAmount { get; set; }
        public int RepaymentPeriod{ get; set; }
        public double InterestRate { get; set; }
        public LoanSchedule CreateLoanSchedule();

    }
}

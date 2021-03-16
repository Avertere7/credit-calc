using System;
using System.Collections.Generic;
using WebApi.Interfaces;

namespace WebApi.Models
{
    public class HouseLoan : ILoan
    {
        public double LoanAmount { get; set; }
        public int LoanYears { get; set; }
        public double InterestRate { get; set; }
        public double YearRate { get; set; }
        public double Total { get; set; }
        public double Interest { get; set; }

        public List<LoanScheduleRow> CreateLoanSchedule()
        {
            throw new NotImplementedException();
        }
    }
}

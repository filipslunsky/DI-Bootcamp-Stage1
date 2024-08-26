# Exercise 1
import datetime
import holidays

def get_today_date():
    date = datetime.date.today()
    return date

print(get_today_date())

def time_until_holiday():
    today = datetime.date.today()
    us_holidays = holidays.US(years = today.year)

    for holiday_date, holiday_name in sorted(us_holidays.items()):
        if holiday_date > today:
            time_until_holiday = holiday_date - today
            return time_until_holiday

    us_holidays_next_year = holidays.US(years=today.year + 1)
    next_year_first_holiday_date, next_year_first_holiday_name = min(us_holidays_next_year.items())
    time_until_holiday = next_year_first_holiday_date - today
    return time_until_holiday

print(time_until_holiday())
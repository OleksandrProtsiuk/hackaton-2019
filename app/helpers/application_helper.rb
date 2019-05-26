module ApplicationHelper
require 'json'


  def total
    total = 0
    Devise.where('pincode': '123456').each do |element|
      total += element.volume
    end
    total
  end

  def total_day
    day = Time.now.strftime("%d")
    total = 0
    Devise.where('pincode': '123456',).each do |element|
      if element.created_at.strftime("%d") == day
        total += element.volume
      end
    end
    total
  end

  def total_week
    total = 0
    d = Date.today
    start_day = (d.at_beginning_of_week.strftime("%d")).to_i
    end_day = start_day + 6
    Devise.where('pincode': '123456',).each do |element|
      if (element.created_at.strftime("%d")).to_i >= start_day && (element.created_at.strftime("%d")).to_i <= end_day
        total += element.volume
      end
    end
    total
  end

  def total_month
    month = Time.now.strftime("%m")
    total = 0
    Devise.where('pincode': '123456',).each do |element|
      if element.created_at.strftime("%m") == month
        total += element.volume
      end
    end
    total
  end

  def gas_leak
    list = []
    Devise.where('pincode': '123456',).each do |element|
      if element.status
        list.push(element.created_at.strftime(" %H:%M     %d.%m.%y"))
      end
    end
    list
  end

  def to_front
    my_hash = {:total => total, :day => total_day, :week => total_week, :month => total_month}
    json = JSON.generate my_hash

    File.open('data.json', 'w') do |f|
      f.write(json.to_json)
      end
  end

end

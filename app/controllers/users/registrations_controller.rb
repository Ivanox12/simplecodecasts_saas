class Users::RegistrationsController < Devise::RegistrationsController
  
  def create
    super do |resource|
      if params[:plans]
        resource.plan_id = params[:plan]
        if resources.plan_id == 2
          resource.save_with_payment
        else
          resource.save
        end
      end
    end
  end 
end
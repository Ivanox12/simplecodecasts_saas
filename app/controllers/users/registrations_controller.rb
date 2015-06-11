class Users::RegistrationsController < Devise::RegistrationsController
  before_filter :select_plan , only: :new
  
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
  
  private 
  def select_plan
    unless params[:params] && (params[:plan] == '1' || params[:plan] == '2')
      flash[:notice] = "Please select a mebership plan to sing up."
      redirect_to root_url
    end
  end
end
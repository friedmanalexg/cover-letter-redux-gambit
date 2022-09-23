class UsersController < ApplicationController
    # before_action :set_user, only: %i[ show update destroy ]
  
    # GET /users
    def index
      users = User.all
  
      render json: users
    end
  
    # GET /users/1
    def show
      user = User.find_by(id: session[:user_id])
      if user
        render json: user, status: :ok
      else
        render json: { error: "Not authorized" }, status: :unauthorized
      end
    end
  
  
    # POST /users
    def create
      user = User.create(user_params)
  
      if user.valid?
        session[:user_id] = user.id
        render json: user, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end
  
    
    # DELETE /users/1
    def destroy
      user = User.find_by(id: session[:user_id])
        if user
          user.destroy
          head :no_content
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end
  
    private
      
      # Only allow a list of trusted parameters through.
      def user_params
        params.permit(:username, :password, :password_confirmation)
      end
  end
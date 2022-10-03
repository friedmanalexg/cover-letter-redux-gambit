class UsersController < ApplicationController
    # before_action :set_user, only: %i[ show update destroy ]
    skip_before_action :authenticate_user, only: [:create]
    #REMEMBER TO DELETE SHOW FROM HERE AND TEST BEFORE DEMO
    
  
    # GET /me/1
    def show
      user = User.find_by(id: session[:user_id])
      render json: user, status: :ok
     
    end
  
  
    # POST /users
    def create
      user = User.create(user_params)
  
      if user.valid?
        session[:user_id] = user.id
        Letter.create(letter_title: "My First Letter", recipient: "", company: "", job_title: "", variable1: "", variable2: "", user: user )
        ProseBlock.create(block_title: "Blank Greeting", block_type: "greeting", prose_content: "", user: user)
        ProseBlock.create(block_title: "Blank Body", block_type: "body", prose_content: "", user: user)
        ProseBlock.create(block_title: "Blank Closing", block_type: "closing", prose_content: "", user: user )
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
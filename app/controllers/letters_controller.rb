class LettersController < ApplicationController

    # GET /letters
    def index
        user = User.find_by(id: session[:user_id])
        letters = user.letters
        render json: letters
    end

    # GET /letters/1
    def show
        user = User.find_by(id: session[:user_id])
        letter = Letter.find(params[:id])
        if user
            render json: letter, status: :ok
        end
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # POST /letters
    def create
        letter = Letter.create(letter_params)
        if letter.valid?
            render json: letter, status: :created
        else
            render json: letter.errors, status: :unprocessable_entity
        end
    end

    # DELETE /users/1
    def destroy
        user = User.find_by(id: session[:user_id])
        letter = Letter.find(params[:id])
        if letter
          letter.destroy
          head :no_content
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private
    # Only allow a list of trusted parameters through.
    def letter_params
        params.permit(:letter_title, :recipient, :company, :job_title, :variable1, :variable2, :user_id)
    end


end
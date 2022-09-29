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
        if letter
            render json: letter, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # POST /letters
    def create
        letter = Letter.create(letter_params)
        # do a for each to create join table 'letter_block'
        if letter.valid?
            render json: letter, status: :created
        else
            render json: letter.errors, status: :unprocessable_entity
        end
    end

    #create with params letter_title, recipient, company, job_title, variable1, variable2
    #create joins with an array of objects as params "selected_blocks"
    #alternately, create joins with a button on the card?
    def update
        letter = Letter.find_by(id: params[:id])
        letter.update(letter_params)
        if letter.valid?
            render json: letter, status: :accepted
        else
            render json: letter.errors, status: :unprocessable_entity
        end
    end
    
   

    def destroy
        user = User.find_by(id: session[:user_id])
        letter = Letter.find(params[:id])
        if user
          letter.destroy
          head :no_content
        else
          render json: { error: "Not found." }, status: :not_found
        end
    end

    private
    # Only allow a list of trusted parameters through.
    def letter_params
        params.permit(:id, :letter_title, :recipient, :company, :job_title, :variable1, :variable2, :user_id)
    end


end
class ProseBlocksController < ApplicationController
    # GET /prose_blocks
    def index
        user = User.find_by(id: session[:user_id])
        prose = user.prose_blocks
        render json: prose
    end

    # GET /prose_blocks/1
    def show
        user = User.find_by(id: session[:user_id])
        prose = ProseBlock.find(params[:id])
        if user
            render json: prose, status: :ok
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    # PATCH /prose_blocks/1
    

    # POST /prose_blocks
    def create
        prose = ProseBlock.create(prose_block_params)
        if prose.valid?
            render json: prose, status: :created
        else
            render json: prose.errors, status: :unprocessable_entity
        end
    end

    # DELETE /prose_blocks/1
    def destroy
        prose = ProseBlock.find(params[:id])
        if prose
          prose.destroy
          head :no_content
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    private
    # Only allow a list of trusted parameters through.
    def prose_block_params
        params.permit(:block_title, :block_type, :prose_content, :user_id)
    end
end

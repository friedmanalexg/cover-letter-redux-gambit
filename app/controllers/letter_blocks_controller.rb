class LetterBlocksController < ApplicationController

    #CREATE /letter_blocks
    def create
        join = LetterBlock.create(letter_block_params)
        if join.valid?
            render json: join, status: :created
        else
            render json: join.errors, status: :unprocessable_entity
        end
    end
    #DESTROY /letter_blocks
    def destroy
        join = LetterBlock.find(params[:id])
        if join
          join.destroy
          head :no_content
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

end

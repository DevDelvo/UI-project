import React, { Component } from 'react';
import { Form, Input, Message, Button, Modal, Icon} from 'semantic-ui-react';
import {FactoryInstance} from '../ethereum/factoryInstance';

export default class SubmitForm extends Component {
    state = {
        msg:'',
        errorMessage: '',
        loadingData: false,
        account: '',
        description: '',
        freightCarrierAddress: '',
        originCustomsAddress: '',
        consigneeAddress: '',
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({errorMessage:'', loadingData:true, msg:''});
        try {
          const {description, freightCarrierAddress, originCustomsAddress, consigneeAddress } = this.state;
          const { account } = this.props;
          const deployedAddress = await FactoryInstance.methods.createSupplyChain(description, freightCarrierAddress, originCustomsAddress, consigneeAddress).send({from:account});
          console.log(deployedAddress);
          this.setState({msg:'Contract deployed successfully!'});
        } catch (err) {
          this.setState({errorMessage:err.message});
        }
        this.setState({loadingData:false});
        console.log(this.state);
    }

    render () {
        const { msg,
                errorMessage,
                loadingData,
        } = this.state;

        let statusMessage;
        if (msg === ''){
            statusMessage = null;
        }else{
            statusMessage = <Message floating positive header="Success!" content={msg} />;
        }

        return (
        <Modal trigger={<Button primary icon labelPosition='right'><Icon name='plus circle' />Create New Contract</Button>}>
            <Modal.Header>Supplychain Transportation Factory</Modal.Header>
            <Modal.Content>
                <Form onSubmit={this.onSubmit} error={!!errorMessage}>
                    <Form.Field>
                        <label>Description</label>
                        <Input name="description" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Freight Carrier Address</label>
                        <Input name="freightCarrierAddress" onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Origin Customs Address</label>
                        <Input name="originCustomsAddress"onChange={this.handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Consignee Address</label>
                        <Input name="consigneeAddress" onChange={this.handleChange} />
                    </Form.Field>
                    <Button loading={loadingData} primary basic type='submit'>Deploy</Button>
                    <Message error header="Oops!" content={errorMessage} />
                    {statusMessage}
                </Form>
            </Modal.Content>
        </Modal>
        )
    }
}